import { api } from "@/lib/axios";

export interface RegisterRestaurantBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  phone,
  email,
}: RegisterRestaurantBody) {
  /* codigo quanto mais visual melhor, nao colocando objetos por inteiro e sim desestruturando */
  await api.post("/restaurants", { email, restaurantName, managerName, phone });
}
