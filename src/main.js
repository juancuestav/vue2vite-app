import Vue from "vue";

import App from "@/App.vue";
import store from "@/store";
import router from "@/router";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "./app.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
