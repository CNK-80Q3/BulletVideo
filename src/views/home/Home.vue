<template>
  <div id="home">
    <NavBar>
      <template v-slot:left>
        <el-button
          @click="drawer = true"
          type="primary"
          icon="el-icon-s-unfold"
        />
        <BVIcon />
      </template>
      <template v-slot:center>
        <Search />
      </template>
      <template v-slot:right>
        <el-avatar :size="40" icon="el-icon-user"></el-avatar>
      </template>
    </NavBar>
    <div id="default">
      <aside id="side-menu">
        <el-drawer title="我是标题" :visible.sync="drawer" direction="ltr">
          <span>我来啦!</span>
        </el-drawer>
      </aside>
      <main id="main">
        <div class="title">推荐视频</div>
        <GridContent>
          <template v-slot:item>
            <MainPreview
              v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
              :key="index"
            />
          </template>
        </GridContent>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Search from "components/common/search/Search";
import GridContent from "components/common/grid/GridContent";

import BVIcon from "components/content/icon/BVIcon";
import MainPreview from "./childComps/main-preview/MainPreview";

export default {
  name: "Home",
  components: {
    NavBar,
    BVIcon,
    Search,
    GridContent,
    MainPreview
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style lang="less" scoped>
#home {
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
      width: 15%;
      height: 100vh;
      background-color: antiquewhite;
    }

    main {
      width: 85%;
      padding: 20px;
      background-color: #131313;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .title {
        height: 50px;
        font-size: 28px;
        font-weight: 900;
        color: #fff;
        line-height: 50px;
      }
    }
  }
}
</style>
