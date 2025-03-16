<template>
  <div class="text-gray-500 body">
    <Navbar class="font-body"></Navbar>
    <!--content wrapper I-->
    <AboutUs></AboutUs>
  </div>
  <Footer1></Footer1>
</template>

<style scoped>
.body {
  margin: 0px;
  width: 100%;
  height: 100%;
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
import AboutUs from "../components/about/AboutUs.vue";

export default {
  name: "ProductView",
  components: { Navbar, Footer1, AboutUs },
};
</script>
