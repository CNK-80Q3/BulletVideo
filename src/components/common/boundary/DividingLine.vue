<template>
  <div id="dividing-line" :style="`backgroundColor:${color}`"></div>
</template>

<script>
export default {
  name: "DividingLine",
  props: {
    color: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
#dividing-line {
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
