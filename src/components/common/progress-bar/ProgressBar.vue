<template>
  <div id="progress-content">
    <div class="progress-wrapper">
      <span class="progress-bar" ref="progressBar"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    currentProgress: {
      type: Number,
      default() {
        return 0;
      }
    },
    fullProgress: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  methods: {
    getProgress(c, f) {
      this.$refs.progressBar.style.width = `${(this.currentProgress /
        this.fullProgress) *
        100}%`;
    }
  }
};
</script>

<style lang="less" scoped>
#progress-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .progress-wrapper {
    margin: 10px 10px;
    width: 100%;
    height: 6px;
    background-color: #444;
    border-radius: 3px;

    .progress-bar {
      display: block;
      width: 0px;
      height: 6px;
      background-color: #fff;
      border-radius: 3px;
    }
  }
}
</style>
