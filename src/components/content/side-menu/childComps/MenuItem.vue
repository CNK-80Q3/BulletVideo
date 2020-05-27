<template>
  <div id="menu-item">
    <a>
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "MenuItem"
};
</script>

<style lang="less" scoped>
#menu-item {
  width: 100%;
  height: 46px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    color: #fff;
    font-weight: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 40px;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .right {
      width: 100%;
      height: 1em;
      margin-left: 20px;
      text-align: start;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
#menu-item:hover {
  background-color: #444;
}
</style>
