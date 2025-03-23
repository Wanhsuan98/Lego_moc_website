<template>
  <main>
    <div class="w-screen h-screen bg-gray-100 body">
      <div class="px-16 py-6 md:col-span-3">
        <div
          class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold font-body text-lego dark:text-white">
            My Favorites
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

        <div
          v-if="favoritesStore.favoriteItems.length === 0"
          class="text-gray-500 font-body m-4"
        >
          No favorite items yet.
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="item in favoritesStore.favoriteItems"
            :key="item.id"
            class="border rounded-lg p-4 flex items-center"
          >
            <img
              :src="item.img"
              alt="item.name"
              class="w-24 h-24 object-cover rounded mr-4"
            />
            <div class="flex-1">
              <h3 class="font-bold">{{ item.name }}</h3>
              <p class="text-gray-600">{{ item.price }}</p>
              <button
                @click="favoritesStore.removeFromFavorites(item.id)"
                class="mt-2 text-red-500 hover:text-red-700"
              >
                Remove from Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useFavoritesStore } from "../store/favorite";
import { ref } from "vue";

export default {
  name: "FavoriteItem",
  setup() {
    const favoritesStore = useFavoritesStore();
    const showModal = ref(false);
    const itemToRemove = ref(null);

    const showConfirmModal = (itemId) => {
      itemToRemove.value = itemId;
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
      itemToRemove.value = null;
    };

    const confirmRemove = () => {
      if (itemToRemove.value !== null) {
        favoritesStore.removeFromFavorites(itemToRemove.value);
        closeModal();
      }
    };

    return {
      showModal,
      itemToRemove,
      showConfirmModal,
      closeModal,
      confirmRemove,
      favoritesStore,
    };
  },
};
</script>

<style scoped>
.body {
  margin: 0px;
}
</style>
