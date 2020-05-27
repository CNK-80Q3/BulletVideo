<template>
  <div id="watch-history-item">
    <div class="preview">
      <Preview />
    </div>
    <div class="watch-preview-info">
      <PreviewInfo :videoInfo="videoInfo" />
    </div>
  </div>
</template>

<script>
import Preview from "components/content/preview/Preview";
import PreviewInfo from "components/content/preview-info/PreviewInfo";

export default {
  name: "WatchHistoryItem",
  components: {
    Preview,
    PreviewInfo
  },
  props: {
    videoInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
#watch-history-item {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .preview {
    display: flex;
    flex-basis: 240px;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
