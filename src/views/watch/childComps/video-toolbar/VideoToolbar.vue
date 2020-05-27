<template>
  <div id="video-toolbar">
    <ToolbarItem
      v-for="(icon, index) in icons"
      :icon="icon"
      :count="videoToolbarData[index]"
      :key="icon.id"
    />
  </div>
</template>

<script>
import ToolbarItem from "./childComps/ToolbarItem";

import ic_thumb_up from "assets/icon/video-toolbar/ic_thumb_up.svg";
import ic_thumb_down from "assets/icon/video-toolbar/ic_thumb_down.svg";
import ic_store from "assets/icon/video-toolbar/ic_store.svg";
import ic_share from "assets/icon/video-toolbar/ic_share.svg";
import ic_more from "assets/icon/video-toolbar/ic_more.svg";
export default {
  name: "VideoToolbar",
  components: {
    ToolbarItem
  },
  data() {
    return {
      icons: [
        { id: 0, src: ic_thumb_up },
        { id: 1, src: ic_thumb_down },
        { id: 2, src: ic_store },
        { id: 3, src: ic_share },
        { id: 4, src: ic_more }
      ]
    };
  },
  props: {
    videoToolbarData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    console.log(this.videoToolbarData);
  }
};
</script>

<style lang="less" scoped>
#video-toolbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
