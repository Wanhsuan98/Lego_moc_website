import axios from "axios";

class AuthService {
  #apiUrl = "http://localhost:3000/api";

  async login(username, password) {
    try {
      console.log("Sending login request:", { username, password }); // Debug 日誌
      const response = await axios.post(`${this.#apiUrl}/login`, {
        username,
        password,
      });
      console.log("Response:", response.data); // Debug 日誌
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return response.data.user;
      } else {
        throw new Error(response.data.message || "登入失敗");
      }
    } catch (error) {
      console.error("Login error:", error); // Debug 日誌
      throw new Error(error.message || "登入失敗"); // 確保是 new Error
    }
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
