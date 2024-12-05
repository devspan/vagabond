export type OrderType = "buy" | "sell" | "limit" | "market";
export type OrderStatus = "open" | "closed" | "cancelled";

export interface Order {
  id: string;
  type: OrderType;
  price: number;
  amount: number;
  total: number;
  status: OrderStatus;
  created_at: string;
  pair: string;
  vwap?: number;
}
