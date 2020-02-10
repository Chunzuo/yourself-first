import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// Vue Awesome swiper
import "swiper/dist/css/swiper.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
