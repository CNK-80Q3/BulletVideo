<template>
  <div id="preview-info">
    <div class="avatar">
      <slot name="avatar"></slot>
    </div>
    <div class="preview-text">
      <el-link :underline="false">
        <div class="video-title" @click="watchVideo">{{ videoInfo.videoTitle }}</div>
      </el-link>
      <slot name="author-name">
        <div class="author-name">{{ videoInfo.publicUserName }}</div>
      </slot>
      <div class="metadata" v-if="isMetadataShow">
        <div class="metadata-line">
          <span class="meta-block">{{ videoInfo.watchCount | numberFilter }}次观看</span>
          <span class="meta-block">
            {{
            videoInfo.publicDate | dateFilter
            }}
          </span>
        </div>
        <div class="more" :class="{ 'show-more-icon': isMoreIconShow }">
          <el-dropdown trigger="click" @visible-change="visibleChange">
            <span class="el-dropdown-link">
              <img :src="moreIcon" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, index) in dropDownMenuItems"
                :divided="item.id === 3"
                :key="item.id"
              >
                <Icon :iconSrc="item.icon" />
                <span>{{ item.title }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <slot name="video-toolbar"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { numberFormat, dateFormat } from "common/utils";
import Icon from "components/common/icon/Icon";

import ic_more_vert from "assets/icon/dropdown/ic_more_vert.svg";
import ic_playlist_play from "assets/icon/dropdown/ic_playlist_play.svg";
import ic_schedule from "assets/icon/dropdown/ic_schedule.svg";
import ic_playlist_add from "assets/icon/dropdown/ic_playlist_add.svg";
import ic_block from "assets/icon/dropdown/ic_block.svg";
import ic_remove_circle_outline from "assets/icon/dropdown/ic_remove_circle_outline.svg";
import ic_flag from "assets/icon/dropdown/ic_flag.svg";

export default {
  name: "PreviewInfo",
  components: {
    Icon
  },
  data() {
    return {
      moreIcon: ic_more_vert,
      dropDownMenuItems: [
        {
          id: 0,
          title: "添加到队列",
          icon: ic_playlist_play
        },
        {
          id: 1,
          title: "保存到“稍后观看”",
          icon: ic_schedule
        },
        {
          id: 2,
          title: "保存到播放列表",
          icon: ic_playlist_add
        },
        {
          id: 3,
          title: "不感兴趣",
          icon: ic_block
        },
        {
          id: 4,
          title: "不推荐频道",
          icon: ic_remove_circle_outline
        },
        {
          id: 5,
          title: "举报",
          icon: ic_flag
        }
      ],
      watchCount: "",
      publicDate: "",
      isMoreIconShow: false
    };
  },
  props: {
    videoInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    isMetadataShow: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  methods: {
    watchVideo() {
      this.$router.push("/watch/" + this.videoInfo.videoId);
    },
    visibleChange() {
      this.isMoreIconShow = !this.isMoreIconShow;
    }
  },
  filters: {
    numberFilter(value) {
      return numberFormat(value);
    },
    dateFilter(value) {
      let date = new Date(value * 1000);
      return dateFormat(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style lang="less" scoped>
#preview-info {
  width: 100%;
  font-size: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .avatar {
    margin-right: 10px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .preview-text {
    width: 100%;
    color: #aaa;
    font-weight: 500;
    font-size: 1.6em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    a {
      font-size: 16px;
    }

    .video-title {
      width: 100%;
      line-height: 1.2em;
      color: #fff;
      font-size: 1.2em;
      font-weight: 600;
      text-align: left;
      text-overflow: ellipsis;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .author-name {
      margin-top: 8px;
    }
    .author-name:hover {
      color: #fff;
    }

    .metadata {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .metadata-line {
        line-height: 1.6em;
      }

      .metadata-line :nth-child(1)::after {
        content: "•";
        margin: 0 4px;
      }

      .more {
        visibility: hidden;
        img {
          width: 20px;
          height: 20px;
        }
      }

      .show-more-icon {
        visibility: visible;
      }
    }
  }
}
</style>
