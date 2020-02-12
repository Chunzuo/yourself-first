import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import profileModule from "./modules/profileModule";
import headerModule from "./modules/headerModule";
import blogModule from "./modules/blodModule";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    profile: profileModule,
    header: headerModule,
    blog: blogModule
  }
});
