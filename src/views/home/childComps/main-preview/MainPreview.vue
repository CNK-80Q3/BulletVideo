<template>
  <div id="main-preview">
    <div class="preview">
      <Preview />
    </div>
    <div class="main-preview-info">
      <PreviewInfo :videoInfo="recommendVideo">
        <template v-slot:avatar>
          <el-avatar :size="40" icon="el-icon-user-solid" />
        </template>
      </PreviewInfo>
    </div>
  </div>
</template>

<script>
import Preview from "components/content/preview/Preview";
import PreviewInfo from "components/content/preview-info/PreviewInfo";

export default {
  name: "MainPreview",
  components: {
    Preview,
    PreviewInfo
  },
  props: {
    recommendVideo: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="less" scoped>
#main-preview {
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1 1 300px;

  .preview {
    width: 100%;
  }

  .main-preview-info {
    margin-top: 10px;
  }
}
</style>
