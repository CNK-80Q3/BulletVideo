import Vue from "vue";
import App from "./App.vue";
import {
  Avatar,
  Button,
  Drawer,
  Icon,
  Image,
  Link,
  Switch,
  Upload
} from "element-ui";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };

Vue.use(Avatar);
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Icon);
Vue.use(Image);
Vue.use(Link);
Vue.use(Switch);
Vue.use(Upload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
