<template>
  <tr :class="{ 'order-row': true, [`order-row--${orderType}`]: true }">
    <td>{{ order.created_at }}</td>
    <td>{{ orderStatus }}</td>
    <td>{{ order.price }}</td>
    <!-- ... other columns -->
    <td>
      <button
        v-if="orderStatus === 'open'"
        class="btn-cancel"
        @click="handleCancel(order.id)"
      >
        {{ $t("common.cancel") }}
      </button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Order, OrderType } from "@/types/orders";

interface Props {
  type?: OrderType;
  order: Order;
  isActivePair?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "limit",
  isActivePair: false,
});

const emit = defineEmits(["cancel", "update"]);

// Computed properties using props
const orderStatus = computed(() => props.order.status);
const orderType = computed(() => props.type);

// Methods using props and emit
const handleCancel = (orderId: string) => {
  emit("cancel", orderId);
};

// Only define handleUpdate if it's being used
/* const handleUpdate = (order: Order) => {
  emit("update", order);
}; */
</script>

<style lang="scss" scoped>
.order-row {
  @apply border-b border-gray-200 hover:bg-gray-50 transition-colors;

  &--buy {
    @apply text-green;
  }

  &--sell {
    @apply text-red;
  }
}

.btn-cancel {
  @apply px-3 py-1 text-sm rounded-md;
  @apply text-red hover:text-red;
  @apply transition-colors duration-200;
}
</style>
