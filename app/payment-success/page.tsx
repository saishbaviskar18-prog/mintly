"use client";

import { CheckCircle2, Gift, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function PaymentSuccessPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/10">
          <CheckCircle2
            size={56}
            className="text-emerald-500"
          />
        </div>

        <h1 className="mt-8 text-4xl font-bold">
          Payment Successful
        </h1>

        <p className="mt-3 text-zinc-400">
          ₹40 paid to Sharma Tea Stall
        </p>

        <div className="mt-10 w-full rounded-[28px] bg-[#18181B] p-6">

          <div className="flex items-center gap-3">
            <Gift className="text-emerald-500" />

            <div>
              <p className="text-sm text-zinc-400">
                Mint Balance
              </p>

              <p className="text-3xl font-bold">
                125
              </p>
            </div>
          </div>

          <div className="mt-6 h-2 rounded-full bg-zinc-800">
            <div className="h-full w-[85%] rounded-full bg-emerald-500" />
          </div>

          <p className="mt-4 text-sm text-zinc-400">
            Only 2 more visits until your free tea.
          </p>

        </div>

        <Button
          className="mt-10 flex items-center justify-center gap-2"
          onClick={() => router.push("/rewards")}
        >
          Continue
          <ArrowRight size={18} />
        </Button>

      </div>
    </main>
  );
}