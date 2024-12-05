import { ref, computed } from "vue";
import type { Order } from "@/types/orders";
import { orderApi } from "@/api/orders";

export function useOrders() {
  const orders = ref<Order[]>([]);
  const loading = ref(false);

  const filteredOrders = computed(() => {
    return orders.value.filter((order: Order) => order.status === "open");
  });

  const cancelOrder = async (orderId: string) => {
    try {
      loading.value = true;
      await orderApi.cancelOrder(orderId);
      orders.value = orders.value.filter((o: Order) => o.id !== orderId);
    } catch (error) {
      console.error("Failed to cancel order:", error);
    } finally {
      loading.value = false;
    }
  };

  return {
    orders,
    loading,
    filteredOrders,
    cancelOrder,
  };
}
