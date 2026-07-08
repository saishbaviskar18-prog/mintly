import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export type DashboardStats = {
  revenue: number;
  transactions: number;
};

export async function getDashboardStats(): Promise<DashboardStats> {
  const snapshot = await getDocs(collection(db, "transactions"));

  let revenue = 0;

  snapshot.forEach((doc) => {
    const data = doc.data();

    revenue += Number(data.amount ?? 0);
  });

  return {
    revenue,
    transactions: snapshot.size,
  };
}