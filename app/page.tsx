import Link from "next/link";
import { CreditCard, Gift } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        <div className="text-center mb-14">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/10">
            <span className="text-5xl">🌿</span>
          </div>

          <h1 className="text-5xl font-bold">
            Mintly
          </h1>

          <p className="mt-3 text-zinc-400">
            Smart NFC Loyalty & Payment Platform
          </p>
        </div>

        <div className="space-y-5">

          <Link
            href="/merchant"
            className="flex items-center justify-center gap-3 rounded-3xl bg-emerald-500 py-5 text-lg font-semibold text-black transition hover:opacity-90"
          >
            <CreditCard size={22} />
            Pay Now
          </Link>

          <Link
            href="/rewards"
            className="flex items-center justify-center gap-3 rounded-3xl border border-zinc-700 bg-[#18181B] py-5 text-lg font-semibold transition hover:border-emerald-500"
          >
            <Gift size={22} />
            My Rewards
          </Link>

        </div>

      </div>
    </main>
  );
}