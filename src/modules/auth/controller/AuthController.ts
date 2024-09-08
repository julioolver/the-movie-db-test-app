import http from "@/plugins/axios";
import storages from "@/services/storages";
import User from "../entities/User";
import { ref, computed, reactive } from "vue";
import router from "@/router";
import { registredUser } from "../types/input-out/registredUser";

export default function useAuthController() {
  const user = reactive(new User({}));

  const isPasswordMatching = computed(
    () => user.password === user.password_confirmation
  );

  const login = async () => {
    console.log(user);

    const userLogin = await http.post("/auth/login", user.login());

    if (userLogin) {
      storages.setToken(userLogin.data.access_token);

      return router.push({ name: "Home" });
    }
  };

  const register = async (): Promise<void> => {
    const { data }: registredUser = await http.post("/auth/register", user);

    storages.setToken(data.access_token);
    router.push({ name: "Home" });
  };

  return {
    user,
    isPasswordMatching,
    login,
    register,
  };
}

// Define a tipagem dos retornos para uso em outras partes
export type AuthController = ReturnType<typeof useAuthController>;
