import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export type Merchant = {
  id: string;
  name: string;
  paymentAmount: number;
  mintBalance: number;
  visits: number;
  rewardTarget: number;
  nextReward: string;
};

export async function getMerchant(): Promise<Merchant | null> {
  try {
    const snapshot = await getDocs(collection(db, "merchants"));

    if (snapshot.empty) return null;

    const doc = snapshot.docs[0];

    return {
      id: doc.id,
      ...(doc.data() as Omit<Merchant, "id">),
    };
  } catch (error) {
    console.error("Error fetching merchant:", error);
    return null;
  }
}
