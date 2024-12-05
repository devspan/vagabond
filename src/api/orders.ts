import type { Order } from "@/types/orders";

export const orderApi = {
  async cancelOrder(orderId: string): Promise<void> {
    // Implement your API call here
    const response = await fetch(`/api/orders/${orderId}`, {
      method: "DELETE",
    });
    
    if (!response.ok) {
      throw new Error("Failed to cancel order");
    }
  },
  
  async getOrders(): Promise<Order[]> {
    // Implement your API call here
    const response = await fetch("/api/orders");
    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }
    return response.json();
  }
}; 