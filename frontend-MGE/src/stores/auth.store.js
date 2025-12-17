import { defineStore } from "pinia";
import {baseURL} from '../api/interceptor.js';


export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    loading: false,
    error: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async loginUser(payload) {
      this.loading = true;
      this.error = null;
      try {
        const response = await baseURL.post("/auth/login",payload);
        console.log(response);
        if(response.success === true) {
          this.token = response.token;
          this.user = response.user;
        }
        localStorage.setItem("token", this.token);
      } catch (error) {
        this.error = error.message || error.message;
      } finally {
        this.loading = false;
      }
    },

    logout() {
      localStorage.clear();
    },
  }
});
