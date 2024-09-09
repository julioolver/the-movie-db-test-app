/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';


// Components
import App from "./App.vue";

// Composables
import { createApp, reactive } from "vue";

const userData = reactive({
  name: "",
});

const app = createApp(App);

app.use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions);

app.config.globalProperties.$userData = userData;

registerPlugins(app);

app.mount("#app");

export { userData };
