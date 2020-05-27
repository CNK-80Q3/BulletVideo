import Vue from "vue";
import App from "./App.vue";
import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Icon,
  Image,
  Input,
  Link,
  Radio,
  Option,
  Select,
  Switch,
  Upload
} from "element-ui";
import router from "./router";
import store from "./store";
import "../mock/index.js";

Vue.config.productionTip = false;

Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };

Vue.use(Avatar);
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Icon);
Vue.use(Image);
Vue.use(Input);
Vue.use(Link);
Vue.use(Radio);
Vue.use(Option);
Vue.use(Select);
Vue.use(Switch);
Vue.use(Upload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
