import Vue from "vue";
import CoxUi from "./index";
import Test from "./Test.vue";

Vue.config.productionTip = false;
Vue.use(CoxUi);

new Vue({
  render: (h) => h(Test),
}).$mount("#test");
