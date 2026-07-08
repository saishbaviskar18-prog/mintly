import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getCustomerByPhone(phone: string) {
  const q = query(
    collection(db, "customers"),
    where("phone", "==", phone)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  return snapshot.docs[0];
}

export async function rewardCustomer(phone: string) {
  const customer = await getCustomerByPhone(phone);

  if (!customer) return;

  const data = customer.data();

  const visits = Number(data.visits) + 1;
  const mintBalance = Number(data.mintBalance) + 10;

  await updateDoc(customer.ref, {
    visits,
    mintBalance,
  });
}

export async function createCustomer(
  name: string,
  phone: string
) {
  await addDoc(collection(db, "customers"), {
    name,
    phone,
    visits: 1,
    mintBalance: 10,
    rewardTarget: 15,
    nextReward: "Free Tea",
  });
}