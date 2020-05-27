<template>
  <div id="personal-page">
    <div class="theme-image">
      <img src="" alt="" />
    </div>
    <div class="header">
      <div class="user-info"></div>
      <div class="navbar"></div>
    </div>
    <div class="main">
      <div class="screen-bar"></div>
      <GreadContent></GreadContent>
    </div>
  </div>
</template>

<script>
import GridContent from "components/common/grid/GridContent";

export default {
  name: "PersonalPage",
  components: {
    GridContent
  }
};
</script>

<style lang="less" scoped>
.personal-page {
  width: 100%;

  .theme-image {
    width: 100%;
    height: 300px;
  }
}
</style>
