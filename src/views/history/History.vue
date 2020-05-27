<template>
  <div id="history">
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
          <SideMenu></SideMenu>
        </el-drawer>
      </aside>
      <main id="main">
        <div class="history-container">
          <div class="box">
            <router-view />
          </div>
        </div>
        <div class="history-category">
          <Boundary boundaryTitle="记录类型" marginLeft="20px" />
          <HistoryCategory :historyCategoryList="historyCategoryList" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import GridContent from "components/common/grid/GridContent";
import Boundary from "components/common/boundary/Boundary";
import DividingLine from "components/common/boundary/DividingLine";

import BVIcon from "components/content/icon/BVIcon";
import SideMenu from "components/content/side-menu/SideMenu";

import HistoryCategory from "./childComps/history-category/HistoryCategory";

export default {
  name: "History",
  components: {
    BVIcon,
    SideMenu,
    Boundary,
    DividingLine,
    HistoryCategory
  },
  data() {
    return {
      mainTitle: "推荐视频",
      historyCategoryList: [
        {
          id: 0,
          title: "观看记录",
          path: "/history/watch-history/1"
        },
        {
          id: 1,
          title: "搜索记录",
          path: "/history/search-history/1"
        },
        {
          id: 2,
          title: "评论记录",
          path: "/history/comment-history/1"
        },
        {
          id: 3,
          title: "社区",
          path: "/history/watch-history/1"
        },
        {
          id: 4,
          title: "实时聊天",
          path: "/history/watch-history/1"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#history {
  width: 100%;
  position: relative;
  top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #default {
    width: 100%;
    height: 100%;
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

    #main {
      width: 100%;
      background-color: #131313;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      .history-container {
        padding: 30px 40px;
        padding-right: 400px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex: 2 2 1400px;

        .box {
          min-width: 600px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex: 0 1 800px;
        }
      }

      .history-category {
        position: fixed;
        top: 70px;
        bottom: 0;
        right: 0;
        width: 400px;
        height: 100%;
        background-color: #181818;
        padding: 30px 40px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex: 1 0 400px;
      }
    }
  }
}
</style>
