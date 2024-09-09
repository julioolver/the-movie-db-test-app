<template>
  <v-app>
    <v-app-bar v-if="!isLoginPage">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Movie List</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn icon @click="toggleTheme">
        <v-tooltip text="Dark Mode">
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props">mdi-theme-light-dark</v-icon>
          </template>
        </v-tooltip>
      </v-btn>
      <v-btn icon @click="router.push({ name: 'Movies' })">
        <v-tooltip text="Buscar Filmes">
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props">mdi-magnify</v-icon>
          </template>
        </v-tooltip>
      </v-btn>
      <v-btn icon @click="router.push({ name: 'UserMovies' })">
        <v-tooltip text="Meus Filmes">
          <template v-slot:activator="{ props }">
            <v-icon v-bind="props">mdi-heart</v-icon>
          </template>
        </v-tooltip>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary
      v-if="!isLoginPage">
      <v-list :items="items"></v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- Mantemos o v-card com scroll -->
      <v-card class="pa-4 ma-4" elevation="2" height="calc(100vh - 130px)" v-if="!isLoginPage"
        style="scrollbar-width: none; overflow-y: auto;" ref="scrollContainer">
        <router-view />
      </v-card>
      <router-view v-else />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { useTheme } from "vuetify";

const router = useRouter();
const drawer = ref(false);
const theme = useTheme();

// Variável reativa para verificar se o tema escuro está ativo
const isDarkTheme = computed(() => theme.global.current.value.dark);

// Função para alternar o tema
const toggleTheme = () => {
  theme.global.name.value = isDarkTheme.value ? 'light' : 'dark';
};

const scrollContainer = ref<HTMLDivElement | null>(null);

// Função para rolar até o topo do contêiner
const scrollToTop = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = 0; // Define o scroll para o topo
  }
};

// Aciona o scroll para o topo sempre que mudar de rota
onBeforeRouteUpdate(() => {
  scrollToTop();
});

// Itens para o menu
const items = [
  {
    title: "GitHub",
    value: "https://github.com/rodrigorgtic/movie-list",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
];

// Verifica se a página atual é a página de login
const isLoginPage = computed(() => {
  return router.currentRoute.value.path === "/login";
});
</script>

<style scoped>
/* Ajuste mínimo para esconder a barra de rolagem */
.v-card {
  scrollbar-width: none;
}
</style>
