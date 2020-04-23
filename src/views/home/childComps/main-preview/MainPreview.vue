<template>
  <div id="main-preview">
    <div class="preview">
      <Preview />
    </div>
    <div class="preview-info">
      <div class="avatar">
        <el-avatar :size="40" icon="el-icon-user"></el-avatar>
      </div>
      <div class="preview-text">
        <div class="video-title" v-html="videoInfo[0].videoTitle"></div>
        <div class="author-name" v-html="videoInfo[0].authorName"></div>
        <div class="metadata-line">
          <span class="meta-block" v-html="videoInfo[0].viewerQuantity"></span>
          <span class="meta-block">{{ videoInfo[0].time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preview from "components/content/preview/Preview";

export default {
  name: "MainPreview",
  components: {
    Preview
  },
  data() {
    return {
      hello: "hello",
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

  .preview-info {
    height: 80px;
    margin-top: 10px;
    font-size: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .avatar {
      width: 15%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .preview-text {
      color: #aaa;
      font-weight: 500;
      font-size: 1.2em;
      width: 85%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .video-title {
        margin: 0 4px;
        font-size: 1.4em;
        width: 100%;
        color: #fff;
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
        line-height: 1.5em;
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
}
</style>
