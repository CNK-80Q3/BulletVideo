<template>
  <div id="progress-content">
    <div class="progress-wrapper">
      <div class="progress-bar" ref="progressBar"></div>
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
    getProgress() {
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
  height: 40px;
  background-color: rgba(60, 60, 60, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  .progress-wrapper {
    width: 90%;
    height: 8px;
    border: 1px solid #3e3e3e;
    border-radius: 4px;

    .progress-bar {
      width: 0px;
      height: 6px;
      background-color: #fff;
      border-radius: 3px;
    }
  }
}
</style>
