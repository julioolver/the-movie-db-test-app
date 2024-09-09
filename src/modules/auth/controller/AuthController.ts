import http from "@/plugins/axios";
import storages from "@/services/storages";
import User from "../entities/User";
import { ref, computed, reactive } from "vue";
import router from "@/router";
import { registredUser } from "../types/input-out/registredUser";

export default function useAuthController() {
  const user = reactive(new User({}));
  const tabAuth = ref(0);

  const isPasswordMatching = computed(
    () => user.password === user.password_confirmation
  );

  const login = async () => {
    try {
      console.log(user);

      const userLogin = await http.post("/auth/login", user.login());

      if (userLogin) {
        storages.setToken(userLogin.data.access_token);

        return router.push({ name: "Home" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (): Promise<void> => {
    try {
      console.log(user);
      const { data }: registredUser = await http.post("/auth/register", user);

      storages.setToken(data.access_token);

      tabAuth.value = 0;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    isPasswordMatching,
    login,
    register,
    tabAuth,
  };
}

// Define a tipagem dos retornos para uso em outras partes
export type AuthController = ReturnType<typeof useAuthController>;
