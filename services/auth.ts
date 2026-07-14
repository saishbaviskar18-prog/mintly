import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

let confirmationResult: ConfirmationResult | null = null;
let recaptchaVerifier: RecaptchaVerifier | null = null;

export const setupRecaptcha = async () => {
  if (typeof window === "undefined") return;

  if (!recaptchaVerifier) {
    recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
      }
    );

    await recaptchaVerifier.render();
  }

  return recaptchaVerifier;
};

export const sendOTP = async (phoneNumber: string) => {
  const verifier = await setupRecaptcha();

  confirmationResult = await signInWithPhoneNumber(
    auth,
    phoneNumber,
    verifier
  );

  return confirmationResult;
};

export const verifyOTP = async (otp: string) => {
  if (!confirmationResult) {
    throw new Error("OTP has not been sent.");
  }

  return confirmationResult.confirm(otp);
};