import storages from "@/services/storages";
import http from "@/plugins/axios";
import { userData } from "@/main"; // Importa o userData reativo

export default {
  async redirectIfNotAuthenticated(to: any, from: any, next: any) {
    const token = storages.getToken();

    if (!token) {
      return next({ name: "Login" });
    }

    try {
      const response = await http.get("auth/me");

      // obtendo a instância reativa do userData criado no main.ts,
      // para não precisar utilizar vuex ou pinia (gerenciamento de estado) neste momento. É acessado com $userData
      userData.name = response.data;

      next();
    } catch (error) {
      console.error("Erro ao validar token:", error);
      storages.deleteToken();
      return next({ name: "Login" });
    }
  },

  redirectIfAuthenticated(to: any, from: any, next: any) {
    const token = storages.getToken();

    if (token) {
      return next({ name: "index" });
    }

    next();
  },
};
