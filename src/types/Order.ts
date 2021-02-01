import { Product } from "./Product";

type Order = {
  id: number;
  user_id: number;
  created_at: string;
  status: number;
  // | "awaiting_confirmation"
  // | "cancelled"
  // | "awaiting_shipment"
  // | "shipped";
  products: Product[];
};

export type { Order };
