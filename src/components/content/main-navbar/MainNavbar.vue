<template>
  <div id="main-navbar">
    <Navbar>
      <template v-slot:left>
        <el-link
          @click="drawerControl"
          icon="el-icon-s-unfold"
          :underline="false"
        />
        <BVIcon />
      </template>
      <template v-slot:center>
        <Search />
      </template>
      <template v-slot:right>
        <el-link
          href="/contribution"
          icon="el-icon-video-camera-solid"
          :underline="false"
        ></el-link>
        <el-link icon="el-icon-s-grid" :underline="false"></el-link>
        <el-link icon="el-icon-message-solid" :underline="false"></el-link>
        <el-avatar :size="40" icon="el-icon-user-solid"></el-avatar>
      </template>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";
import BVIcon from "components/content/icon/BVIcon";
import Search from "components/common/search/Search";

import { mapState } from "vuex";

export default {
  name: "MainNavbar",
  components: {
    Navbar,
    BVIcon,
    Search
  },
  data() {
    return {};
  },
  methods: {
    drawerControl() {
      let drawerOpen = this.$store.state.drawerOpen;
      this.$store.commit("drawerControl");
      console.log(this.$store.state.drawerOpen);
    }
  }
};
</script>
