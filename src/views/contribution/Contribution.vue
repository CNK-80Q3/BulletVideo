<template>
  <div id="contribution">
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
        <div class="title"></div>
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </main>
    </div>
  </div>
</template>

<script>
import SideMenu from "components/content/side-menu/SideMenu";

export default {
  name: "Contribution",
  components: {
    SideMenu
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
#contribution {
  position: relative;
  top: 70px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: antiquewhite;

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
      height: 100%;
      padding: 30px;
      background-color: #131313;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        height: 50px;
        margin: 0 10px;
        font-size: 26px;
        font-weight: 900;
        color: #fff;
        line-height: 50px;
      }
    }
  }
}
</style>
