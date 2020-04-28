<template>
  <div id="preview-info">
    <div class="avatar">
      <slot name="avatar"></slot>
    </div>
    <div class="preview-text">
      <el-link :underline="false">
        <div class="video-title" @click="watchVideo">
          {{ videoInfo[0].videoTitle }}
        </div>
      </el-link>
      <slot name="author-name">
        <div class="author-name">{{ videoInfo[0].authorName }}</div>
      </slot>
      <div class="metadata-line">
        <span class="meta-block">{{ videoInfo[0].viewerQuantity }}</span>
        <span class="meta-block">{{ videoInfo[0].time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewInfo",
  props: {
    videoInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    watchVideo() {
      this.$router.push("/watch");
    }
  }
};
</script>

<style lang="less" scoped>
#preview-info {
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
    color: #aaa;
    font-weight: 500;
    font-size: 1.4em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    a {
      font-size: 16px;
    }

    .video-title {
      width: 100%;
      line-height: 1.4em;
      color: #fff;
      font-size: 1em;
      font-weight: 500;
      text-align: left;
      text-overflow: ellipsis;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .metadata-line {
      line-height: 1.6em;
    }
    .author-name {
      margin-top: 8px;
    }
    .author-name:hover {
      color: #fff;
    }

    .metadata-line :nth-child(1)::after {
      content: "•";
      margin: 0 4px;
    }
  }
}
</style>
