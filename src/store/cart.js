import { defineStore } from "pinia";
import { useProductsStore } from "./products";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),

  getters: {
    cartItems: (state) => {
      const productsStore = useProductsStore();
      return state.cart.map((cartItem) => {
        const product = productsStore.getProduct(cartItem.id);
        return { ...product, quantity: cartItem.quantity };
      });
    },
    cartItemsCount: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },

  actions: {
    addToCart(payload) {
      const item = this.cart.find((item) => item.id === Number(payload));
      if (item) {
        item.quantity += 1;
      } else {
        this.cart.push({ id: Number(payload), quantity: 1 });
      }
    },
    removeFromCart(payload) {
      this.cart = this.cart.filter((item) => item.id !== Number(payload));
    },
    incrementQuantity(payload) {
      const item = this.cart.find((item) => item.id === Number(payload));
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity(payload) {
      const item = this.cart.find((item) => item.id === Number(payload));
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          this.cart = this.cart.filter((i) => i.id !== Number(payload));
        }
      }
    },
  },
});
