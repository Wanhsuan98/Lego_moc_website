<template>
  <!-- navbar -->
  <div class="navbarall md:col-span-3">
    <nav
      class="py-3 flex-wrap bg-white shadow md:flex md:items-center md:justify-between cursor-pointer"
    >
      <div class="ssm:px-3 md:px-8 nav">
        <span class="text-2xl text-lego">
          <div class="flex">
            <div class="bg-lego h-2 w-6"></div>
            <div class="bg-moc h-2 w-6"></div>
            <div class="bg-world h-2 w-6"></div>
          </div>
          LEGO
        </span>
        <span class="text-2xl text-moc"> MOC </span>
        <span class="text-2xl text-world">
          WORLD
          <div class="flex">
            <div class="bg-world h-2 w-6"></div>
            <div class="bg-moc h-2 w-6"></div>
            <div class="bg-lego h-2 w-6"></div>
          </div>
        </span>
      </div>

      <div class="mobile-menu">
        <ul class="md:flex md:items-center text-lego">
          <li>
            <router-link to="/" class="navbar">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }" class="navbar"
              >About</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'product' }" class="navbar"
              >Product</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'favorite' }" class="navbar"
              >My favorite</router-link
            >
          </li>
        </ul>
      </div>
      <div class="mobile-menu md:px-11 text-moc">
        <router-link :to="{ name: 'login' }" class="navbar">Login</router-link>
        <router-link :to="{ name: 'signup' }" class="navbar"
          >Signup</router-link
        >
      </div>
    </nav>
  </div>
  <!-- navbar end -->
</template>
