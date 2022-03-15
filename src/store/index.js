import Vue from "vue";
import Vuex from "vuex";
import ticketsAereos from "./modules/ticketsAereos";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    ticketsAereos,
  },
});
