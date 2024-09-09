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
      <v-list>
        <v-list-item-group>

          <v-list-item @click="goToExternalLink('https://github.com/julioolver')">
            <v-list-item-icon>
              <v-icon>mdi-github</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>GitHub</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="goToExternalLink('https://www.linkedin.com/in/julio-cesar-oliveira-957593169')">
            <v-list-item-icon>
              <v-icon>mdi-linkedin</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>LinkedIn</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-card class="pa-4 ma-4" elevation="2" height="calc(100vh - 130px)" v-if="!isLoginPage"
        style="scrollbar-width: none; overflow-y: scroll">
        <router-view />
      </v-card>
      <router-view v-else />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "vuetify";

const router = useRouter();
const drawer = ref(false);
const theme = useTheme();

const isDarkTheme = computed(() => theme.global.current.value.dark);

const toggleTheme = () => {
  theme.global.name.value = isDarkTheme.value ? 'light' : 'dark';
};

const isLoginPage = computed(() => {
  return router.currentRoute.value.path === "/login";
});

const goToExternalLink = (url: string) => {
  window.open(url, '_blank');
};
</script>
