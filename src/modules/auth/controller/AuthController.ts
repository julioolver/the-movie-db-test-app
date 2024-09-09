import http from "@/plugins/axios";
import storages from "@/services/storages";
import User from "../entities/User";
import { ref, computed, reactive } from "vue";
import router from "@/router";
import { registredUser } from "../types/input-out/registredUser";
import { catchErrors } from "@/handler/errors";

export default function useAuthController() {
  const user = reactive(new User({}));
  const tabAuth = ref(0);
  const valid = ref(false);
  const isLoginValid = ref(false);

  const isPasswordMatching = computed(
    () => user.password === user.password_confirmation
  );

  const login = async () => {
    try {
      if (!isLoginValid.value) {
        return;
      }
      const userLogin = await http.post("/auth/login", user.login());

      if (userLogin) {
        storages.setToken(userLogin.data.access_token);

        return router.push({ name: "Home" });
      }
    } catch (error) {
      if (error.response) {
        catchErrors(error.response.data);
      } else {
        catchErrors(error);
      }
    }
  };

  const register = async (): Promise<void> => {
    if (!valid.value) {
      return;
    }

    try {
      console.log(user);
      const { data }: registredUser = await http.post("/auth/register", user);

      storages.setToken(data.access_token);

      tabAuth.value = 0;
    } catch (error) {
      catchErrors(error);
    }
  };

  return {
    user,
    isPasswordMatching,
    login,
    register,
    tabAuth,
    valid,
    isLoginValid,
  };
}

// Define a tipagem dos retornos para uso em outras partes
export type AuthController = ReturnType<typeof useAuthController>;
