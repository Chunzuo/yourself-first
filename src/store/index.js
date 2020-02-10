import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import profileModule from "./modules/profileModule";
import headerModule from "./modules/headerModule";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    profile: profileModule,
    header: headerModule
  }
});
