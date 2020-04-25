<template>
  <div id="preview">
    <img
      src="../../../assets/img/dev/placeholder.png"
      alt
      class="preview-cover"
      ref="cover"
      @mouseenter="onMouseenter"
    />
    <div
      class="preview-main"
      ref="previewMain"
      @mousemove="onMousemove($event)"
      @mouseleave="onMouseleave"
    >
      <ProgressBar :currentProgress="currentPicture" :fullProgress="100" ref="progressBar" />
    </div>
  </div>
</template>

<script>
import ProgressBar from "components/common/progress-bar/ProgressBar";

export default {
  name: "Preview",
  components: {
    ProgressBar
  },
  data() {
    return {
      src: "../../../assets/img/dev/placeholder.png",
      currentPicture: 0,
      allPicture: 100
    };
  },
  methods: {
    onMousemove(e) {
      const previewMain = this.$refs.previewMain
      let width = previewMain.offsetWidth;
      let height = previewMain.offsetHeight;
      let itemWidth = previewMain.offsetWidth / this.allPicture;
      let positionX = e.offsetX;
      // 第几张图片
      this.currentPicture = Math.ceil(positionX / itemWidth);
      // 获取当前图片的横纵轴位置
      let x = (this.currentPicture - 1) % 10;
      let y = Math.ceil(this.currentPicture / 10) - 1;
      // 设置当前背景图定位
      previewMain.style.backgroundPosition = `-${x * width}px -${y * height}px`;
      this.$refs.progressBar.getProgress();
    },
    onMouseenter() {
      const previewMain = this.$refs.previewMain
      let width = previewMain.offsetWidth;
      let height = previewMain.offsetHeight;
      this.$refs.previewMain.style.backgroundSize = `${width * 10}px ${height * 10}px`;
      this.$refs.cover.style.display = "none";
    },
    onMouseleave() {
      this.$refs.cover.style.display = "block";
    }
  }
};
</script>

<style lang="less" scoped>
#preview {
  width: 100%;
  height: 211px;
  overflow: hidden;

  .preview-main {
    background: url(https://i0.hdslb.com/bfs/videoshot/87607720.jpg@.webp);
    width: 100%;
    height: 100%;
  }

  .preview-cover {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
