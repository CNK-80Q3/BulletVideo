<template>
  <div id="navbar">
    <slot name="left"></slot>
    <slot name="center" class="center"></slot>
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
  width: 100%;
  height: 70px;
  padding: 0 15px;
  background-color: @bgColor;
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
}
</style>
