import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import veeValidatePlugins from "./plugins/vee-validate";
const app = createApp(App);
import VueTelInput from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";

import VueTheMask from "vue-the-mask";

app.use(createPinia());
app.use(VueTheMask);
app.use(router);
app.use(veeValidatePlugins);

app.mount("#app");
