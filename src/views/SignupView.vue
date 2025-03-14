<template>
  <div class="grid md:grid-cols-3 text-gray-500 font-body body">
    <Navbar></Navbar>

    <main class="px-16 py-6 bg-gray-100 md:col-span-3 font-login">
      <div class="content p-5">
        <form @submit.prevent="handleSubmit">
          <label>Email:</label>
          <input type="email" required v-model="email" />

          <label>User name:</label>
          <input type="text" required v-model="userName" />

          <label>Password:</label>
          <input type="Password" required v-model="Password" />
          <div v-if="passwordError" class="error">{{ passwordError }}</div>

          <label>GENDER </label>
          <select v-model="gender">
            <option value="male">male</option>
            <option value="female">female</option>
          </select>

          <div class="accept my-4">
            <input
              type="checkbox"
              v-model="terms"
              required
              class="bg-gray-300"
            />
            <label>Accept Rentome User Agreement and Privacy Policy</label>
          </div>

          <div class="submit">
            <button
              class="bg-gray-200 text-gray-400 border-gray-300 border-4 hover:bg-gray-400 hover:text-white transition ease-out duration-500 rounded-lg"
            >
              Create an Account
            </button>
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

export default {
  name: "LoginView",
  components: { Navbar, Footer1 },
  data() {
    return {
      email: "",
      Password: "",
      passwordError: "",
      userName: "",
    };
  },
  methods: {
    handleSubmit() {
      // console.log('from submitted')
      this.passwordError =
        this.password.length > 5
          ? ""
          : "password must be at least 6 charts long";

      if (!this.passwordError) {
        console.log("email: ", this.email);
        console.log("password: ", this.password);
        console.log("gender: ", this.gender);
        console.log("username: ", this.userName);
        console.log("terms accepted: ", this.accept);
      }
    },
  },
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
