<template>
  <div id="menu-header">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "MenuHeader"
}
</script>

<style lang="less" scoped>
#menu-header {
  width: 100%;
  height: 70px;
  padding: 0px 20px;
  border-bottom: 1px solid #444;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    color: #fff;
    font-size: 30px;
  }
}
</style>