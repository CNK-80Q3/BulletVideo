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
        <MenuItem
          v-for="(item, index) in block"
          :key="index"
          @click.native="chooseMenuItem(item.path)"
        >
          <template v-slot:left>
            <Icon :iconSrc="item.icon"></Icon>
          </template>
          <template v-slot:right>
            <span>{{ item.title }}</span>
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
            <span>{{ item.title }}</span>
          </template>
        </MenuItem>
      </template>
    </MenuBlock>
  </div>
</template>

<script>
import Icon from "components/common/icon/Icon";
import BVIcon from "components/content/icon/BVIcon";

import MenuHeader from "./childComps/MenuHeader";
import MenuBlock from "./childComps/MenuBlock";
import MenuItem from "./childComps/MenuItem";

import ic_home from "assets/icon/side-menu/ic_home.svg";
import ic_whatshot from "assets/icon/side-menu/ic_whatshot.svg";
import ic_subscriptions from "assets/icon/side-menu/ic_subscriptions.svg";
import ic_video_library from "assets/icon/side-menu/ic_video_library.svg";
import ic_history from "assets/icon/side-menu/ic_history.svg";
import ic_slideshow from "assets/icon/side-menu/ic_slideshow.svg";
import ic_schedule from "assets/icon/side-menu/ic_schedule.svg";
import ic_thumb_up from "assets/icon/side-menu/ic_thumb_up.svg";

export default {
  name: "SideMenu",
  components: {
    Icon,
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
            icon: ic_home,
            path: "/home",
            title: "首页"
          },
          {
            icon: ic_whatshot,
            title: "时下流行"
          },
          {
            icon: ic_subscriptions,
            title: "订阅内容"
          }
        ],
        management: [
          {
            icon: ic_video_library,
            title: "媒体库"
          },
          {
            icon: ic_history,
            path: "/history/watch-history/1",
            title: "历史记录"
          },
          {
            icon: ic_slideshow,
            title: "您的视频"
          },
          {
            icon: ic_schedule,
            title: "稍后观看"
          },
          {
            icon: ic_thumb_up,
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
  },
  methods: {
    chooseMenuItem(item) {
      this.$router.push(item);
    }
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
