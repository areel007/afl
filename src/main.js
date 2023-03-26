import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyAmOWQZlRJMDmtZzz5ZBx45ieAYpJayfps",
      libraries: "places",
      // language: 'de',
    },
  })
  .use(router)
  .mount("#app");
