<template>
  <div id="side-menu">
    <MenuHeader>
      <template v-slot:left>
        <el-link @click="drawer = false" icon="el-icon-s-unfold" :underline="false" />
      </template>
      <template v-slot:right>
        <BVIcon />
      </template>
    </MenuHeader>
    <MenuBlock v-for="(block, index) in sideMenu" :key="index">
      <template v-slot:menu-block>
        <MenuItem v-for="(item, index) in block" :key="index">
          <template v-slot:left>
            <i :class="item.icon"></i>
          </template>
          <template v-slot:right>
            <span>{{item.title}}</span>
          </template>
        </MenuItem>
      </template>
    </MenuBlock>
    <MenuBlock :subscription="subscription">
      <template v-slot:menu-header>
        <div>订阅内容</div>
      </template>
      <template v-slot:menu-block>
        <MenuItem v-for="(item, index) in subscription" :key="index">
          <template v-slot:left>
            <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
          </template>
          <template v-slot:right>
            <span>{{item.title}}</span>
          </template>
        </MenuItem>
      </template>
    </MenuBlock>
  </div>
</template>

<script>
import BVIcon from "components/content/icon/BVIcon";

import MenuHeader from "./childComps/MenuHeader";
import MenuBlock from "./childComps/MenuBlock";
import MenuItem from "./childComps/MenuItem";

export default {
  name: "SideMenu",
  components: {
    BVIcon,
    MenuHeader,
    MenuBlock,
    MenuItem
  },
  data() {
    return {
      sideMenu: {
        category: [
          {
            icon: "el-icon-s-home",
            title: "首页"
          },
          {
            icon: "el-icon-s-home",
            title: "时下流行"
          },
          {
            icon: "el-icon-s-home",
            title: "订阅内容"
          }
        ],
        management: [
          {
            icon: "el-icon-s-home",
            title: "媒体库"
          },
          {
            icon: "el-icon-s-home",
            title: "历史记录"
          },
          {
            icon: "el-icon-s-home",
            title: "稍后观看"
          },
          {
            icon: "el-icon-s-home",
            title: "顶过的视频"
          }
        ]
      },
      subscription: [
        {
          icon: "el-icon-s-home",
          title: "哇萨比抓马 WasabiDrama"
        },
        {
          icon: "el-icon-s-home",
          title: "名侦探拳头"
        },
        {
          icon: "el-icon-s-home",
          title: "Juji & Tom"
        },
        {
          icon: "el-icon-s-home",
          title: "我是RT"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#side-menu {
  width: 100%;
  height: 100%;
  background-color: #1e1e1e;
}
</style>
