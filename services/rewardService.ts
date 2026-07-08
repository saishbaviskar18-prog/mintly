import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export type CustomerReward = {
  id: string;
  name: string;
  phone: string;
  mintBalance: number;
  visits: number;
  rewardTarget: number;
  nextReward: string;
};

export async function getCustomerRewards(): Promise<CustomerReward | null> {
  const snapshot = await getDocs(collection(db, "customers"));

  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];

  return {
    id: doc.id,
    ...(doc.data() as Omit<CustomerReward, "id">),
  };
}