"use client";

import { CreditCard, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/ui/Button";
import { createTransaction } from "@/services/transactionService";

type PaymentHeroProps = {
  amount: number;
  merchantId: string;
};

export default function PaymentHero({
  amount,
  merchantId,
}: PaymentHeroProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handlePayment() {
    try {
      setLoading(true);

      await createTransaction(merchantId, amount);

      router.push("/payment-success");
    } catch (error) {
      console.error(error);
      alert("Payment failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-14">
      <div className="text-center">
        <h2 className="text-6xl font-bold tracking-tight text-white">
          ₹{amount}
        </h2>

        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Ready to Pay
        </p>
      </div>

      <Button
        className="mt-8 flex items-center justify-center gap-3"
        onClick={handlePayment}
        disabled={loading}
      >
        <CreditCard size={20} />

        <span>
          {loading ? "Processing..." : `Pay ₹${amount}`}
        </span>

        {!loading && <ChevronRight size={18} />}
      </Button>
    </section>
  );
}