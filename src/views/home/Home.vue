<template>
  <div id="home">
    <div id="default">
      <aside id="side-menu">
        <el-drawer
          :visible.sync="$store.state.drawerOpen"
          direction="ltr"
          size="260px"
          :show-close="false"
          :withHeader="false"
          title="BulletVideo"
          class="drawer"
        >
          <SideMenu />
        </el-drawer>
      </aside>
      <main id="main">
        <Boundary boundaryTitle="推荐视频"></Boundary>
        <GridContent>
          <template v-slot:item>
            <MainPreview
              v-for="(item, index) in recommendVideos"
              :key="item.id"
              :recommendVideo="item"
            />
          </template>
        </GridContent>
      </main>
    </div>
  </div>
</template>

<script>
import GridContent from "components/common/grid/GridContent";
import Boundary from "components/common/boundary/Boundary";

import BVIcon from "components/content/icon/BVIcon";
import SideMenu from "components/content/side-menu/SideMenu";

import MainPreview from "./childComps/main-preview/MainPreview";

import { getHomePageRecommend, HomePageRecommend } from "network/home";
export default {
  name: "Home",
  components: {
    BVIcon,
    SideMenu,
    Boundary,
    GridContent,
    MainPreview
  },
  data() {
    return {
      mainTitle: "推荐视频",
      recommendVideos: []
    };
  },
  methods: {
    getHomePageRecommend() {
      getHomePageRecommend().then(res => {
        this.recommendVideos = new HomePageRecommend(res).recommends;
      });
    }
  },
  created() {
    this.getHomePageRecommend();
  }
};
</script>

<style lang="less" scoped>
#home {
  position: relative;
  top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  #default {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    aside {
      position: relative;
      height: 100%;

      /deep/.el-drawer {
        outline: none;
      }
    }

    main {
      width: 100%;
      padding: 30px;
      background-color: #131313;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
}
</style>
