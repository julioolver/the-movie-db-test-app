import http from "@/plugins/axios";
import storages from "@/services/storages";
import User from "../entities/User";
import { ref, computed, reactive } from "vue";
import router from "@/router";
import { registredUser } from "../types/input-out/registredUser";
import { toast } from "vue3-toastify";

export default function useAuthController() {
  const user = reactive(new User({}));
  const tabAuth = ref(0);
  const valid = ref(false);

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
      catchErrors(error);
    }
  };

  const register = async (): Promise<void> => {
    try {
      console.log(user);
      const { data }: registredUser = await http.post("/auth/register", user);

      storages.setToken(data.access_token);

      tabAuth.value = 0;
    } catch (error) {
      catchErrors(error);
    }
  };

  const catchErrors = (error: any) => {
    const messageError = catchStatusCodeErrors(error);

    toast.error(messageError);
  };

  const catchStatusCodeErrors = (error: any): string => {
    if (error.response && error.response.status === 422) {
      return Object.values(error.response.data.errors).flat().join("<br>");
    }

    if (error.code === "ERR_NETWORK") {
      return "Ocorreu uma inconsistência oa estabelecer a conexão com o servidor.";
    }

    return error.message;
  };

  return {
    user,
    isPasswordMatching,
    login,
    register,
    tabAuth,
    valid,
  };
}

// Define a tipagem dos retornos para uso em outras partes
export type AuthController = ReturnType<typeof useAuthController>;
