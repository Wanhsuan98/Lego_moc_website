<template>
  <main>
    <div class="w-screen h-screen bg-gray-100 body">
      <div class="px-16 py-6 md:col-span-3">
        <div
          class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold font-body text-lego dark:text-white">
            Shopping cart
          </h3>
          <router-link to="/product" class="text-gray-400 hover:text-gray-900">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </router-link>
        </div>

        <div class="p-6 space-y-6">
          <ul v-if="cartStore.cartItems.length > 0" class="">
            <li
              v-for="item in cartStore.cartItems"
              :key="item.id"
              class="flex items-center justify-start md:justify-between py-2"
            >
              <span>{{ item.name }}</span>
              <div class="flex items-center">
                <button
                  class="addAndDel text-3xl px-4"
                  @click="decrementWithConfirm(item.id)"
                >
                  -
                </button>
                <span class="px-4">{{ item.quantity }}</span>
                <button
                  class="addAndDel text-2xl px-4"
                  @click="cartStore.incrementQuantity(item.id)"
                >
                  +
                </button>
                <button
                  class="text-red-400 px-4 btnHover font-body"
                  @click="showConfirmModal(item.id, 'remove')"
                >
                  Delete
                </button>
              </div>
            </li>
          </ul>
          <div
            v-if="cartStore.cartItems.length > 0"
            class="mt-6 flex justify-end mr-5"
          >
            <p class="text-lg text-gray-800">
              Total: ${{
                cartStore.cartItems
                  .reduce(
                    (sum, item) =>
                      sum + parseFloat(item.price.slice(1)) * item.quantity,
                    0
                  )
                  .toFixed(2)
              }}
            </p>
          </div>
          <p v-else class="text-gray-500 font-body">
            Your Shopping Cart is empty!
          </p>
          <transition name="fade">
            <div
              v-if="showModal"
              class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
            >
              <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">
                  確認移除
                </h3>
                <p class="text-gray-600 mb-6">
                  確定要從購物車中移除「{{
                    cartStore.cartItems.find((item) => item.id === itemToRemove)
                      ?.name
                  }}」嗎？
                </p>
                <div class="flex justify-end space-x-4">
                  <button
                    class="px-4 py-2 text-gray-500 btnCancelHover"
                    @click="closeModal"
                  >
                    取消
                  </button>
                  <button
                    class="px-4 py-2 bg-red-500 text-white btnHover"
                    @click="confirmAction"
                  >
                    確認
                  </button>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useCartStore } from "../store/cart";

export default {
  name: "CartView",
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
  data() {
    return {
      showModal: false,
      itemToRemove: null,
    };
  },
  methods: {
    showConfirmModal(itemId, type) {
      this.itemToRemove = itemId;
      this.actionType = type;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.itemToRemove = null;
      this.actionType = null;
    },
    confirmAction() {
      if (this.itemToRemove !== null) {
        if (this.actionType === "remove") {
          this.cartStore.removeFromCart(this.itemToRemove);
        } else if (this.actionType === "decrementToZero") {
          this.cartStore.removeFromCart(this.itemToRemove);
        }
      }
      this.closeModal();
    },
    decrementWithConfirm(itemId) {
      const item = this.cartStore.cartItems.find((item) => item.id === itemId);
      if (item && item.quantity === 1) {
        this.showConfirmModal(itemId, "decrementToZero");
      } else {
        this.cartStore.decrementQuantity(itemId);
      }
    },
  },
};
</script>

<style scoped>
.body {
  margin: 0px;
}
</style>
