import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

let confirmationResult: ConfirmationResult | null = null;

export const setupRecaptcha = () => {
  if (typeof window === "undefined") return;

  if (!(window as any).recaptchaVerifier) {
    (window as any).recaptchaVerifier =
      new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "normal",
      });
  }
};

export const sendOTP = async (phoneNumber: string) => {
  setupRecaptcha();

  confirmationResult = await signInWithPhoneNumber(
    auth,
    phoneNumber,
    (window as any).recaptchaVerifier
  );

  return confirmationResult;
};

export const verifyOTP = async (otp: string) => {
  if (!confirmationResult) {
    throw new Error("OTP has not been sent.");
  }

  return confirmationResult.confirm(otp);
};