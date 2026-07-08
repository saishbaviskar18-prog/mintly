import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export type DashboardStats = {
  revenue: number;
  transactions: number;
};

export type RecentPayment = {
  id: string;
  amount: number;
  createdAt: Date | null;
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

export async function getRecentPayments(): Promise<RecentPayment[]> {
  const q = query(
    collection(db, "transactions"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    amount: Number(doc.data().amount),
    createdAt: doc.data().createdAt?.toDate() ?? null,
  }));
}