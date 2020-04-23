<template>
  <div id="preview">
    <img
      src="../../../assets/img/dev/placeholder.png"
      alt=""
      class="preview-cover"
      ref="cover"
      @mouseover="onMouseover($event)"
    />
    <div
      class="preview-main"
      @mousemove="onMousemove($event)"
      @mouseleave="onMouseleave($event)"
    >
      <ProgressBar
        :currentProgress="currentPicture"
        :fullProgress="100"
        ref="progressBar"
      />
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
      let width = e.target.offsetWidth;
      let height = e.target.offsetHeight;
      console.log(width, height);
      let itemWidth = e.target.offsetWidth / this.allPicture;
      let positionX = e.offsetX;
      // 第几张图片
      this.currentPicture = Math.ceil(positionX / itemWidth);
      // 图片的横纵轴位置
      let x = (this.currentPicture - 1) % 10;
      let y = Math.ceil(this.currentPicture / 10) - 1;
      console.log(x, ":", y);
      e.target.style.backgroundPosition = `-${x * width}px -${y * height}px`;
      e.target.style.backgroundSize = `${width * 10}px`;
      this.$refs.progressBar.getProgress();
    },
    onMouseover(e) {
      setTimeout(() => {
        this.$refs.cover.style.display = "none";
      }, 200);
    },
    onMouseleave(e) {
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
