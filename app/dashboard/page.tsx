import { IndianRupee, Users, Gift, Receipt } from "lucide-react";
import { getDashboardStats } from "@/services/dashboardService";
import type { ReactNode } from "react";

const recentPayments = [
  { name: "Amit", amount: 40 },
  { name: "Priya", amount: 60 },
  { name: "Rahul", amount: 25 },
];

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <div className="mx-auto max-w-md px-6 py-10">

        <h1 className="text-3xl font-bold">
          Good Afternoon 👋
        </h1>

        <p className="mt-2 text-zinc-400">
          Sharma Tea Stall
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">

          <StatCard
            icon={<IndianRupee size={20} />}
            title="Revenue"
            value={`₹${stats.revenue}`}
          />

          <StatCard
            icon={<Receipt size={20} />}
            title="Transactions"
            value={`${stats.transactions}`}
          />

          <StatCard
            icon={<Users size={20} />}
            title="Customers"
            value="127"
          />

          <StatCard
            icon={<Gift size={20} />}
            title="Rewards"
            value="9"
          />

        </div>

        <h2 className="mt-10 text-xl font-semibold">
          Recent Payments
        </h2>

        <div className="mt-5 space-y-3">

          {recentPayments.map((payment) => (
            <div
              key={payment.name}
              className="flex justify-between rounded-2xl bg-[#18181B] p-4"
            >
              <span>{payment.name}</span>

              <span className="font-semibold">
                ₹{payment.amount}
              </span>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}

function StatCard({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl bg-[#18181B] p-5">

      <div className="text-zinc-400">
        {icon}
      </div>

      <p className="mt-4 text-sm text-zinc-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {value}
      </h3>

    </div>
  );
}