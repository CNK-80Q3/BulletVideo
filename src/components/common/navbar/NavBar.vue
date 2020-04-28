<template>
  <div id="navbar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="less" scoped>
@bgColor: #1e1e1e;

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  height: 70px;
  padding: 0 20px;
  background-color: @bgColor;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-left {
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
      font-size: 30px;
      color: #fff;
      text-decoration: none;
    }
  }

  .nav-right {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    display: flex;

    a {
      margin-right: 20px;
      font-size: 25px;
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
