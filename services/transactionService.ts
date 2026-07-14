import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function createTransaction(
  merchantId: string,
  customerId: string,
  customerPhone: string,
  amount: number
) {
  return await addDoc(collection(db, "transactions"), {
    merchantId,
    customerId,
    customerPhone,
    amount,
    status: "success",
    createdAt: serverTimestamp(),
  });
}