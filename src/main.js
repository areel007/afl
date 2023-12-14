import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import Particles from "vue3-particles";

createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyAmOWQZlRJMDmtZzz5ZBx45ieAYpJayfps",
      libraries: "places",
    },
  })
  .use(Particles)
  .use(router)
  .use(VueGtag, {
    property: {
      id: "G-Y31T8E95YC",
    },
  })
  .mount("#app");
