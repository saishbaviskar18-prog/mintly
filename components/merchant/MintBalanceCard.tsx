type MintBalanceCardProps = {
  mintBalance: number;
  visits: number;
  rewardTarget: number;
  nextReward: string;
};

export default function MintBalanceCard({
  mintBalance,
  visits,
  rewardTarget,
  nextReward,
}: MintBalanceCardProps) {
  const progress = (visits / rewardTarget) * 100;

  return (
    <section className="mt-12 rounded-[28px] bg-[#18181B] p-6">

      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
        Mint Balance
      </p>

      <h2 className="mt-2 text-5xl font-bold">
        {mintBalance}
      </h2>

      <div className="mt-8 h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-5 flex justify-between">

        <span className="text-zinc-400">
          {visits} / {rewardTarget} Visits
        </span>

        <span className="font-medium">
          {nextReward}
        </span>

      </div>

    </section>
  );
}