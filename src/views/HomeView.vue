<template>
  <div class="font-body">
    <video src="../assets/lego2.mp4" class="video" autoplay loop muted></video>
    <div
      class="start text-5xl text-gray-500 tansform hover:scale-110 transition ease-in-out duration-700"
    >
      <router-link to="/product" class="hover:text-gray-100">
        <span class="text-lego legoMocWorld">lego</span>
        <span class="text-moc legoMocWorld">moc</span>
        <span class="text-world legoMocWorld">world</span>
      </router-link>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.start {
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-top: 320px;
  width: 500px;
}
.video {
  position: fixed;
  object-fit: cover;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
  z-index: -1;
}
@media screen and (max-width: 768px) {
  .video {
    max-width: 100%;
    height: 100%;
    /* display:none */
  }
  span {
    font-size: 20px;
    margin: 0 auto;
  }
}
#navbarall {
  position: fixed;
  overflow: hidden;
  bottom: 0;
  width: 100%;
}
</style>

<script>
export default {};
</script>
