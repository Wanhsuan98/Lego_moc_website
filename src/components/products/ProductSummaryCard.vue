<template>
  <!-- <div class="grid md:grid-cols-3 text-gray-500 font-body body"> -->
  <main class="px-16 py-6 bg-gray-100 md:col-span-3">
    <div class="text-gray-500 flex justify-center md:justify-end">
      <button
        class="btn text-red-400 border-red-300 border-2 hover:bg-red-400 hover:text-white transition ease-out duration-500"
      >
        <!-- @click="control.tab='all'" id="to-my-cart"  -->
        all items
      </button>

      <button
        class="block btn text-red-400 border-red-300 border-2 hover:bg-red-400 hover:text-white transition ease-out duration-500 rounded-lg px-5 py-2.5 text-center"
        type="button"
        data-modal-toggle="defaultModal"
        @click="showCart = !showCart"
      >
        MY cart
        <span class="total-quantity">{{ totalQuantity }}</span>
      </button>

      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
      >
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div
              class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
            >
              <h3 class="text-xl font-semibold text-lego dark:text-white">
                my items
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="p-6 space-y-6" v-if="showCart">
              <ul class="cart-dropdown-list">
                <li v-for="item in cart" :key="item.id">
                  {{ item.name }}: {{ item.quantity }}
                </li>
              </ul>
            </div>

            <div
              class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
            >
              <button
                data-modal-toggle="defaultModal"
                type="button"
                class="text-lego text-base uppercase rounded-full hover:text-sky-300 duration-300"
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <header>
      <h2 class="text-lego text-xl cursor-pointer">MOC BY gabizon</h2>

      <a href="#" class="text-world flex text-md pt-5 border-b border-blue-200">
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
        <div class="card hover:shadow-xl" v-for="item in items" :key="item.id">
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
                  class="addAndDel text-3xl px-7 cartBtn"
                  @click="updateCart(item, 'subtract')"
                >
                  -
                </button>

                <span> {{ item.quantity }} </span>

                <button
                  class="addAndDel text-2xl px-7 cartBtn"
                  @click="updateCart(item, 'add')"
                >
                  +
                </button>
              </span>
            </span>
          </div>
          <button class="badge">
            <!-- :class="{addToCart : addToCart[item.uid]}" @click="toggle_cart(item.uid)" -->
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
            <span> track </span>
          </button>
        </div>
      </div>

      <a href="#" class="flex mt-12 border-b border-blue-200 text-moc">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        all items
      </a>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: "0001",
          name: "Modular Medieval House #21318",
          price: "$100",
          category: "gabizon",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          addToCart: "#21318",
          quantity: 0,
          img: require("/src/assets/21318.jpg"),
        },
        {
          id: "0002",
          name: "Modular Neighborhood #35965",
          price: "$100",
          category: "gabizon",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          addToCart: "#35965",
          quantity: 0,
          img: require("/src/assets/35965.jpg"),
        },
        {
          id: "0003",
          name: "Desert Village #32630",
          price: "$100",
          category: "gabizon",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          addToCart: "#32630",
          quantity: 0,
          img: require("/src/assets/32630.jpg"),
        },
        {
          id: "0004",
          name: "Iron man himself #31204",
          price: "$100",
          category: "kszd",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          addToCart: "#31204",
          quantity: 0,
          img: require("/src/assets/31204.jpg"),
        },
        {
          id: "0005",
          name: "Taylor Swift #31205",
          price: "$100",
          category: "kszd",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          addToCart: " #31205",
          quantity: 0,
          img: require("/src/assets/31205.jpg"),
        },
        {
          id: "0006",
          name: "Michael Jackson #31199",
          price: "$100",
          category: "kszd",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          addToCart: "#31199",
          quantity: 0,
          img: require("/src/assets/31199.jpg"),
        },
      ],
      showCart: false,
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
    updateCart(item, updateType) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === item.id) {
          if (updateType === "subtract") {
            if (this.items[i].quantity !== 0) {
              this.items[i].quantity--;
            }
          } else {
            this.items[i].quantity++;
          }

          break;
        }
      }
    },
  },
  props: ["product"],
};
</script>

<style scoped>
.cart-dropdown-list {
  color: black;
  font-family: "Merienda", cursive;
  font-weight: 300;
  font-size: 16px;
  list-style: none;
}
li {
  margin: 1rem 0;
}
</style>
