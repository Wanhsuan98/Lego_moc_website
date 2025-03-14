<template>
  <div class="grid md:grid-cols-3 text-gray-500 font-body body">
    <Navbar></Navbar>
    <main class="px-16 py-6 bg-gray-100 md:col-span-3 font-login">
      <div class="content flex justify-center">
        <table class="md:table-fixed w-full my-12">
          <thead class="bg-gray-200 border-b-2 border-gray-300">
            <tr class="" v-for="item in items" :key="item.id">
              <th>ITEM</th>
              <th>AMOUNT</th>
              <th>COST</th>
              <th>TOTAL</th>
            </tr>
          </thead>

          <tbody>
            <tr class="border-b-2 border-gray-300 text-center">
              <td class="px-5">{{ item.name }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.sum }}</td>
              <td>
                <button class="text-xl" @click="remove(product)">×</button>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td colspan="3">
                Total
                <span class="total-price">$ {{ total }}</span>
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>

        <button class="">CHECK OUT</button>
      </div>
    </main>
  </div>
  <Footer1></Footer1>

  <router-view></router-view>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer1 from "../components/Footer.vue";

export default {
  name: "LoginView",
  components: { Navbar, Footer1 },
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
    };
  },
  methods: {},
};
</script>

<style>
.body {
  background-color: white;
  margin-top: -370px;
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: 75vh;
}
form {
  max-width: 420px;
  margin: 40px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  margin: 30px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: rgb(187, 186, 186);
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 1px;
}

button {
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: rgba(233, 76, 37, 0.714);
  margin-top: 8px;
  margin-bottom: 7px;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
