import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function createTransaction(
  merchantId: string,
  amount: number
) {
  return await addDoc(collection(db, "transactions"), {
    merchantId,
    amount,
    status: "success",
    createdAt: serverTimestamp(),
  });
}