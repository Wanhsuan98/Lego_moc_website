// store/favorites.js
import { defineStore } from "pinia";
import { useProductsStore } from "./products";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favorites: [], // 只存儲產品ID和相關數據
  }),

  getters: {
    favoriteItems: (state) => {
      const productsStore = useProductsStore();
      return state.favorites.map((favoriteItem) => {
        const product = productsStore.getProduct(favoriteItem.id);
        return { ...product };
      });
    },
    favoriteItemsCount: (state) => {
      return state.favorites.length;
    },
    isFavorite: (state) => {
      return (productId) => state.favorites.some(item => item.id === Number(productId));
    }
  },

  actions: {
    addToFavorites(payload) {
      const item = this.favorites.find((item) => item.id === Number(payload));
      if (!item) {
        this.favorites.push({ id: Number(payload) });
      }
    },
    removeFromFavorites(payload) {
      this.favorites = this.favorites.filter((item) => item.id !== Number(payload));
    },
    toggleFavorite(payload) {
      const item = this.favorites.find((item) => item.id === Number(payload));
      if (item) {
        this.removeFromFavorites(payload);
      } else {
        this.addToFavorites(payload);
      }
    }
  },
});