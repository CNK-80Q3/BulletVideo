<template>
  <div id="navbar">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {}
};
</script>

<style lang="less" scoped>
@bgColor: #1e1e1e;

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // z-index: 10000;
  height: 70px;
  padding: 0 20px;
  background-color: @bgColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
