<template>
  <div class="grid md:grid-cols-3 text-gray-500 font-body body">
    <Navbar></Navbar>

    <!--content wrapper -->
    <ProductSummaryCard></ProductSummaryCard>
  </div>
  <Footer1></Footer1>

  <router-view></router-view>
</template>

<style scoped>
.body {
  margin-top: -370px;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 768px) {
  .body {
    width: 500px;
  }
}

.nav {
  width: 300px;
}
.navbarall {
  width: 100%;
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import Footer1 from "../components/Footer.vue";
import ProductSummaryCard from "../components/products/ProductSummaryCard.vue";

export default {
  name: "AboutView",
  components: { Navbar, Footer1, ProductSummaryCard },
};
</script>
