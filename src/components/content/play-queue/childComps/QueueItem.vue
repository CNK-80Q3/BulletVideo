<template>
  <div id="queue-item" @mousedown="onMousedown">
    <div class="icon">
      <i class="el-icon-d-caret"></i>
    </div>
    <div class="preview">
      <Preview />
    </div>
    <div class="queue-preview-info">
      <PreviewInfo :videoInfo="videoInfo" :isMetadataShow="false" />
    </div>
    <div class="icon">
      <i class="el-icon-delete-solid"></i>
    </div>
  </div>
</template>

<script>
import Preview from "components/content/preview/Preview";
import PreviewInfo from "components/content/preview-info/PreviewInfo";

export default {
  name: "QueueItem",
  components: {
    Preview,
    PreviewInfo
  },
  data() {
    return {
      videoInfo: {
        videoTitle:
          "這是個教人長大的黑暗童話，深度解析《潘神的迷宮》怪物原型|哇薩比抓馬WasabiDrama",
        publicUserName: "哇萨比抓马 WasabiDrama",
        watchCount: 789005,
        publicDate: "4个月前"
      }
    };
  },
  methods: {
    onMousedown() {}
  }
};
</script>

<style lang="less" scoped>
#queue-item {
  padding: 4px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1 1 0;

  .icon {
    width: 60px;
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
  }

  .preview {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 150px;
    flex-grow: 0;
    flex-shrink: 0;
  }
}

#queue-item:hover {
  background-color: rgba(255, 255, 255, 0.1);

  .icon {
    visibility: visible;
  }
}
</style>
