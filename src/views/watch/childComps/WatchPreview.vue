<template>
  <div id="watch-preview">
    <div class="preview">
      <Preview />
    </div>
    <div class="watch-preview-info">
      <PreviewInfo :videoInfo="recommendVideo" />
    </div>
  </div>
</template>

<script>
import Preview from "components/content/preview/Preview";
import PreviewInfo from "components/content/preview-info/PreviewInfo";

export default {
  name: "WatchPreview",
  components: {
    Preview,
    PreviewInfo
  },
  props: {
    recommendVideo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
#watch-preview {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1 1 240px;

  .preview {
    display: flex;
    flex-basis: 240px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .watch-preview-info {
    width: 100%;
  }
}

#watch-preview:hover {
  .watch-preview-info {
    /deep/.more {
      visibility: visible;
    }
  }
}
</style>
