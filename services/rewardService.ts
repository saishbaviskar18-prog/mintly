import { getCustomerByPhone } from "./customerService";

export async function getCustomerRewards(phone: string) {
  return await getCustomerByPhone(phone);
}