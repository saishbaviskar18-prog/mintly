"use client";

import { useState } from "react";
import Link from "next/link";
import { sendOTP } from "@/services/auth";

export default function RewardsPage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);

      window.location.href = "/dashboard";

      alert("OTP sent successfully!");

    } catch (error: any) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">

        <Link
          href="/"
          className="text-yellow-500 hover:text-yellow-400"
        >
          ← Back
        </Link>

        <h1 className="mt-8 text-4xl font-bold">
          ⭐ My Rewards
        </h1>

        <p className="mt-3 text-gray-400">
          Enter your mobile number to continue.
        </p>

        <label className="mt-10 block text-sm text-gray-400">
          Mobile Number
        </label>

        <input
          type="tel"
          placeholder="9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-yellow-500 bg-zinc-900 px-5 py-4 text-lg outline-none"
        />

        <button
          onClick={handleContinue}
          disabled={loading}
          className="mt-8 w-full rounded-2xl bg-yellow-500 py-4 text-lg font-bold text-black transition hover:bg-yellow-400 disabled:opacity-60"
        >
          {loading ? "Sending OTP..." : "Continue"}
        </button>

        <div id="recaptcha-container" className="mt-6"></div>

      </div>
    </main>
  );
}