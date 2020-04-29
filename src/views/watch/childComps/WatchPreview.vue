<template>
  <div id="watch-preview">
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
  name: "WatchPreview",
  components: {
    Preview,
    PreviewInfo
  },
  data() {
    return {
      videoInfo: [
        {
          videoTitle:
            "這是個教人長大的黑暗童話，深度解析《潘神的迷宮》怪物原型|哇薩比抓馬WasabiDrama",
          authorName: "哇萨比抓马 WasabiDrama",
          viewerQuantity: "51万次观看",
          time: "4个月前"
        }
      ]
    };
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
}
</style>
