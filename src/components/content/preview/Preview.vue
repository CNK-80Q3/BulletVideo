<template>
  <div id="preview">
    <div class="preview-cover" ref="cover">
      <img src="../../../assets/img/dev/placeholder.png" alt />
    </div>
    <div
      class="preview-main"
      ref="previewMain"
      @mouseenter="onMouseenter()"
      @mousemove="onMousemove($event)"
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
      allPicture: 100,
      isCoverShow: true,
      width: 0,
      height: 0
    };
  },
  computed: {
    hideCover() {
      return this.isCoverShow
        ? {
          opacity: "0"
        }
        : {
          opacity: "1"
        };
    }
  },
  methods: {
    onMousemove(e) {
      const previewMain = this.$refs.previewMain;
      let itemWidth = this.width / this.allPicture;
      let positionX = e.offsetX;
      // 第几张图片
      this.currentPicture = Math.ceil(positionX / itemWidth);
      // 获取当前图片的横纵轴位置
      let x = (this.currentPicture - 1) % 10;
      let y = Math.ceil(this.currentPicture / 10) - 1;
      // 设置当前背景图定位
      previewMain.style.backgroundPosition = `-${x * this.width}px -${y *
        this.height}px`;
      this.$refs.progressBar.getProgress();
    },
    onMouseenter() {
      const previewMain = this.$refs.previewMain;
      this.width = previewMain.offsetWidth;
      this.height = previewMain.offsetHeight;
      this.$refs.previewMain.style.backgroundSize = `${this.width * 10}px ${this
        .height * 10}px`;
      // this.isCoverShow === true &&
      //   setTimeout(() => {
      //     this.isCoverShow = false;
      //   }, 200);
    }
  }
};
</script>

<style lang="less" scoped>
#preview {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .preview-main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: url("https://i0.hdslb.com/bfs/videoshot/84054067.jpg@.webp");
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s 0s;
  }

  .preview-main:hover {
    opacity: 1;
    transition: opacity 0.4s 0.4s;
  }

  .preview-cover {
    width: 100%;
    height: 100%;
    visibility: visible;
    transition-delay: 3s;

    img {
      width: 100%;
      height: 100%;
      vertical-align: bottom;
    }
  }
}
</style>
