import { createApp } from "vue";

import App from "./App.vue";
import "./assets/main.css";
import router from "./router/index";
import i18n from "./i18n";

const app = createApp(App);

app.use(i18n);
app.use(router);

app.mount("#app");
