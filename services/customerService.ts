import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  increment,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export type Customer = {
  id: string;
  name: string;
  phone: string;
  mintBalance: number;
  visits: number;
  rewardTarget: number;
  nextReward: string;
};

export async function getCustomerByPhone(phone: string) {
  const q = query(
    collection(db, "customers"),
    where("phone", "==", phone)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  const customer = snapshot.docs[0];

  return {
    id: customer.id,
    ...(customer.data() as Omit<Customer, "id">),
  };
}

export async function createCustomer(
  name: string,
  phone: string
) {
  const existing = await getCustomerByPhone(phone);

  if (existing) return existing;

  const ref = await addDoc(collection(db, "customers"), {
    name,
    phone,
    mintBalance: 0,
    visits: 0,
    rewardTarget: 15,
    nextReward: "Free Tea",
    createdAt: new Date(),
  });

  return {
    id: ref.id,
    name,
    phone,
    mintBalance: 0,
    visits: 0,
    rewardTarget: 15,
    nextReward: "Free Tea",
  };
}

export async function rewardCustomer(customerId: string) {
  const customerRef = doc(db, "customers", customerId);

  // Increase visits and Mint balance
  await updateDoc(customerRef, {
    visits: increment(1),
    mintBalance: increment(10),
  });

  // Read the updated customer
  const snapshot = await getDoc(customerRef);

  if (!snapshot.exists()) return;

  const data = snapshot.data();

  if (data.visits >= data.rewardTarget) {
    await updateDoc(customerRef, {
      nextReward: "🎉 Reward Ready!",
    });
  }
}