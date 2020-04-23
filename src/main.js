import Vue from "vue";
import App from "./App.vue";
import { Avatar, Button, Drawer, Icon, Image } from "element-ui";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };

Vue.use(Avatar);
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Icon);
Vue.use(Image);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
