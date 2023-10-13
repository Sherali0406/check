import authApi from "../api/auth/authApi";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import router from "@/router/index";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    roles: [],
  }),
  actions: {
    async authLogin(payload) {
      try {
        let res = await authApi.login(payload);
        if (res?.tokens?.access_token) {
          localStorage.setItem("role", res?.user?.role);
          localStorage.setItem("token", res?.tokens?.access_token);
          if (res?.user?.role == "admin") {
            await router.push({ name: "admin" });
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});
