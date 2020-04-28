<template>
  <div id="boundary">
    <div class="boundary-left">
      <img src="" alt="" />
      <span class="title">{{ boundaryTitle }}</span>
    </div>
    <div class="boundary-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Boundary",
  props: {
    boundaryTitle: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>

<style lang="less" scoped>
#boundary {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .boundary-left {
    font-size: 1.2em;
    font-weight: 900;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .boundary-right {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
}
</style>
