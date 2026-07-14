"use client";

import { useEffect, useState } from "react";
import { Gift, Phone, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/lib/firebase";
import { getCustomerRewards } from "@/services/rewardService";

export default function RewardsPage() {
  const router = useRouter();

  const [customer, setCustomer] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user || !user.phoneNumber) {
        router.push("/login");
        return;
      }

      const rewards = await getCustomerRewards(user.phoneNumber);

      setCustomer(rewards);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#09090B] flex items-center justify-center text-white">
        Loading rewards...
      </main>
    );
  }

  if (!customer) {
    return (
      <main className="min-h-screen bg-[#09090B] flex items-center justify-center text-white">
        Customer not found.
      </main>
    );
  }

  const progress = Math.min(
    (customer.visits / customer.rewardTarget) * 100,
    100
  );

  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <div className="mx-auto max-w-md px-6 py-10">

        <div className="flex items-center gap-3">
          <Gift className="text-emerald-500" />
          <h1 className="text-3xl font-bold">My Rewards</h1>
        </div>

        <div className="mt-10 rounded-[28px] bg-[#18181B] p-6">

          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Mint Balance
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            {customer.mintBalance}
          </h2>

          <div className="mt-8 h-2 rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-emerald-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-4 flex justify-between">
            <span className="text-zinc-400">
              {customer.visits} / {customer.rewardTarget} Visits
            </span>

            <span>{customer.nextReward}</span>
          </div>

        </div>

        <div className="mt-8 rounded-[28px] bg-[#18181B] p-6">

          <div className="flex items-center gap-3">
            <User size={18} />
            <span>{customer.name}</span>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <Phone size={18} />
            <span>{customer.phone}</span>
          </div>

        </div>

      </div>
    </main>
  );
}