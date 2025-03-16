<template>
  <main class="px-16 py-6 bg-gray-100 md:col-span-3">
    <div class="text-gray-500 flex justify-center md:justify-end font-body">
      <router-link
        to="/cart"
        class="block btn btnHover rounded-lg px-5 py-2.5 text-center"
      >
        MY cart
        <span class="total-quantity">{{ cartStore.cartItemsCount }}</span>
      </router-link>
    </div>

    <header>
      <h2 class="text-lego text-xl cursor-pointer font-body">MOC BY gabizon</h2>

      <a
        href="#"
        class="text-world flex text-md pt-5 border-b border-blue-200 font-body"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-world h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
            clip-rule="evenodd"
          />
        </svg>
        most popular
      </a>
    </header>

    <div>
      <div class="mt-8 grid lg:grid-cols-3 gap-10">
        <!-- cards I-->
        <div
          class="card hover:shadow-xl"
          v-for="item in productsStore.products"
          :key="item.id"
        >
          <img
            :src="item.img"
            alt="#21318"
            class="w-full h-32 sm:h-48 object-cover"
          />
          <div class="m-4">
            <span class="description"> {{ item.name }}</span>
            <span class="block description">Price: ${{ item.price }} </span>
            <span class="description">
              {{ item.category }}
              <span class="flex items-center justify-end">
                <button
                  class="addBtn font-body"
                  @click="addToCartWithNotification(item.id)"
                >
                  Add to Cart
                </button>
              </span>
            </span>
          </div>
          <button class="badge" @click="toggleFavorite(item)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-moc h-5 w-5 inline-block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span class="font-body">
              {{ favoritesStore.isFavorite(item.id) ? "Untrack" : "Track" }}
            </span>

            <!-- 加入最愛提示框 -->
            <transition name="fade">
              <div
                v-if="showFavoriteNotification"
                class="fixed bottom-4 right-4 bg-lime-500 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                {{ favoriteNotificationMessage }}
              </div>
            </transition>
          </button>
        </div>
      </div>
    </div>

    <!-- 加入提示框 -->
    <transition name="fade">
      <div
        v-if="showNotification"
        class="fixed bottom-4 right-4 bg-lime-500 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        SUCCESSFULLYY ADD TO CART!
      </div>
    </transition>
  </main>
</template>

<script>
import { useCartStore } from "../../store/cart";
import { useProductsStore } from "../../store/products";
import { useFavoritesStore } from "../../store/favorite";

export default {
  setup() {
    const cartStore = useCartStore();
    const productsStore = useProductsStore();
    const favoritesStore = useFavoritesStore();
    return { cartStore, productsStore, favoritesStore };
  },

  data() {
    return {
      showNotification: false,
      showFavoriteNotification: false,
      favoriteNotificationMessage: "",
    };
  },
  computed: {
    cart() {
      return this.items.filter((item) => item.quantity > 0);
    },
    totalQuantity() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
  methods: {
    getItemQuantity(itemId) {
      const cartItem = this.cartStore.cart.find((item) => item.id === itemId);
      return cartItem ? cartItem.quantity : 0;
    },
    addToCartWithNotification(itemId) {
      this.cartStore.addToCart(itemId);
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 2000);
    },
    toggleFavorite(item) {
      this.favoritesStore.toggleFavorite(item.id); 
      this.favoriteNotificationMessage = this.favoritesStore.isFavorite(item.id)
        ? "Added to favorites!"
        : "Removed from favorites!";
      this.showFavoriteNotification = true;
      setTimeout(() => {
        this.showFavoriteNotification = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
