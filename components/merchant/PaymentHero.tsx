"use client";

import { CreditCard, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

type PaymentHeroProps = {
  amount: number;
};

export default function PaymentHero({ amount }: PaymentHeroProps) {
  const router = useRouter();

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
        onClick={() => router.push("/payment-success")}
      >
        <CreditCard size={20} />
        <span>Pay ₹{amount}</span>
        <ChevronRight size={18} />
      </Button>
    </section>
  );
}