import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// Vue Awesome swiper
import "swiper/dist/css/swiper.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

// Minialist Timeline
import "../node_modules/timeline-vuejs/dist/timeline-vuejs.css";

// Google Maps
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: "AIzaSyAaPzZ6FPtWRqBIW5OlHrdGuCLBuLLk9uM",
    libraries: "places" // This is required if you use the Auto complete plug-in
  }
});

// Vuesax
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
