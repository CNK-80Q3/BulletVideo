<template>
  <div id="menu-block">
    <div class="menu-header">
      <slot name="menu-header"></slot>
    </div>
    <div class="menu-block">
      <slot name="menu-block"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBlock"
}
</script>

<style lang="less" scoped>
#menu-block {
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #444;
  display: flex;
  flex-direction: column;

  .menu-header {
    padding: 0 20px;
    width: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    div {
      padding: 12px 0;
    }
  }
}
</style>