import MerchantHeader from "@/components/merchant/MerchantHeader";
import PaymentHero from "@/components/merchant/PaymentHero";
import MintBalanceCard from "@/components/merchant/MintBalanceCard";
import RecentVisits from "@/components/merchant/RecentVisits";
import { getMerchant } from "@/services/merchantService";

export default async function MerchantPage() {
  const merchant = await getMerchant();

  if (!merchant) {
    return (
      <main className="min-h-screen bg-[#09090B] flex items-center justify-center text-white">
        Merchant not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <div className="mx-auto max-w-md px-6 py-12">
        <MerchantHeader name={merchant.name} />

        <PaymentHero
  amount={merchant.paymentAmount}
  merchantId={merchant.id}
  customerPhone="9876543210"
/>

        <MintBalanceCard
  mintBalance={merchant.mintBalance}
  visits={merchant.visits}
  rewardTarget={merchant.rewardTarget}
  nextReward={merchant.nextReward}
/>

        <RecentVisits />
      </div>
    </main>
  );
}