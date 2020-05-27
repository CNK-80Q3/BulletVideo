<template>
  <div id="icon" :style="`width:${size}px`">
    <img :src="iconSrc" alt="" />
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    iconSrc: {
      type: String,
      default() {
        return "";
      }
    },
    size: {
      type: String,
      default() {
        return "20";
      }
    }
  }
};
</script>

<style lang="less" scoped>
#icon {
  margin: 6px;
  display: inline-block;
  justify-self: flex-start;
  align-self: center;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
