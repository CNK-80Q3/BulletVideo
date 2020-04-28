import { DRAWER_CONTROL } from "./mutations-type";

export default {
  [DRAWER_CONTROL](state) {
    state.drawerOpen = !state.drawerOpen;
  }
};
