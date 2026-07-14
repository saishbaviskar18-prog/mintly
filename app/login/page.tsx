"use client";

import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { sendOTP, verifyOTP } from "@/services/auth";

export default function LoginPage() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSendOTP() {
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      setLoading(true);

      await sendOTP(`+91${phone}`);

      setOtpSent(true);

      alert("OTP sent successfully!");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyOTP() {
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);

 const userCredential = await verifyOTP(otp);

const user = userCredential.user;

const { createCustomer } = await import(
  "@/services/customerService"
);

await createCustomer(
  user.displayName || "Mintly Customer",
  user.phoneNumber || ""
);

alert("Login successful!");

router.push("/rewards");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#09090B] flex items-center justify-center px-6 text-white">
      <div className="w-full max-w-md">

        <div className="text-center mb-12">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/10">
            <span className="text-5xl">🌿</span>
          </div>

          <h1 className="text-4xl font-bold">
            Welcome to Mintly
          </h1>

          <p className="mt-3 text-zinc-400">
            Login to access your rewards.
          </p>
        </div>

        <div className="rounded-3xl bg-[#18181B] p-6">

          {!otpSent ? (
            <>
              <label className="mb-3 block text-sm text-zinc-400">
                Mobile Number
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-zinc-700 px-4 py-4">

                <Phone size={20} className="text-zinc-500" />

                <input
                  type="tel"
                  placeholder="9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent outline-none"
                />

              </div>

              <button
                onClick={handleSendOTP}
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-4 font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Sending OTP..." : "Continue"}

                {!loading && <ArrowRight size={18} />}
              </button>
            </>
          ) : (
            <>
              <label className="mb-3 block text-sm text-zinc-400">
                Enter OTP
              </label>

              <input
                type="text"
                placeholder="123456"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full rounded-2xl border border-zinc-700 bg-transparent px-4 py-4 outline-none"
              />

              <button
                onClick={handleVerifyOTP}
                disabled={loading}
                className="mt-6 w-full rounded-2xl bg-emerald-500 py-4 font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </>
          )}

          <div
            id="recaptcha-container"
            className="mt-6 flex justify-center"
          />

        </div>

      </div>
    </main>
  );
}