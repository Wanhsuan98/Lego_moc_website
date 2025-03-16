import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 0,
        name: "Modular Medieval House #21318",
        price: "$100",
        category: "gabizon",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        addToCart: "#21318",
        quantity: 0,
        img: require("/src/assets/21318.jpg"),
      },
      {
        id: 1,
        name: "Modular Neighborhood #35965",
        price: "$100",
        category: "gabizon",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        addToCart: "#35965",
        quantity: 0,
        img: require("/src/assets/35965.jpg"),
      },
      {
        id: 2,
        name: "Desert Village #32630",
        price: "$100",
        category: "gabizon",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        addToCart: "#32630",
        quantity: 0,
        img: require("/src/assets/32630.jpg"),
      },
      {
        id: 3,
        name: "Iron man himself #31204",
        price: "$100",
        category: "kszd",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        addToCart: "#31204",
        quantity: 0,
        img: require("/src/assets/31204.jpg"),
      },
      {
        id: 4,
        name: "Taylor Swift #31205",
        price: "$100",
        category: "kszd",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        addToCart: " #31205",
        quantity: 0,
        img: require("/src/assets/31205.jpg"),
      },
      {
        id: 5,
        name: "Michael Jackson #31199",
        price: "$100",
        category: "kszd",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        addToCart: "#31199",
        quantity: 0,
        img: require("/src/assets/31199.jpg"),
      },
    ],
  }),

  getters: {
    getProduct: (state) => (id) => {
      return state.products.find((p) => p.id === id);
    },
    getProductByTitle: (state) => (name) => {
      return state.products.find((p) => p.name === name);
    },
  },
});
