<template>
  <div class="grid md:grid-cols-3 text-gray-500 font-body body">
    <Navbar></Navbar>
    <main class="px-16 py-6 bg-gray-100 md:col-span-3 font-login">
      <div class="content p-5">
        <form @submit.prevent="handleSubmit">
          <label>UserName:</label>
          <input type="text" required v-model="username" />

          <label>Password:</label>
          <input type="Password" required v-model="password" />
          <div v-if="passwordError" class="error">{{ passwordError }}</div>

          <div class="submit">
            <button class="loginBtn loginBtnHover mt-4">LOGIN</button>
          </div>
        </form>
      </div>
    </main>
  </div>
  <Footer1></Footer1>

  <router-view></router-view>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer1 from "../components/Footer.vue";
import AuthService from "@/service/AuthService";

export default {
  name: "LoginView",
  components: { Navbar, Footer1 },
  data() {
    return {
      username: "",
      password: "",
      passwordError: "",
    };
  },
  methods: {
    async handleSubmit() {
      this.passwordError = "";

      if (this.password.length <= 3) {
        this.passwordError = "密碼長度需大於 3 個字符";
        return;
      }

      try {
        const username = await AuthService.login(this.username, this.password);
        this.username = "";
        this.password = "";
        this.$router.push("/product");
      } catch (error) {
        this.passwordError = error.message || "登入失敗，請檢查帳號或密碼";
      }
    },
  },
};
</script>

<style>
.body {
  background-color: white;
  margin: 0;
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
