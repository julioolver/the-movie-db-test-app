/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp, reactive } from "vue";

const userData = reactive({
  name: "",
});

const app = createApp(App);

app.config.globalProperties.$userData = userData;

registerPlugins(app);

app.mount("#app");

export { userData };
