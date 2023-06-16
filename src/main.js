import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import Particles from "vue3-particles";

createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyAmOWQZlRJMDmtZzz5ZBx45ieAYpJayfps",
      libraries: "places",
      // language: 'de',
    },
  })
  .use(Particles)
  .use(router)
  .mount("#app");
