<template>
  <div id="search">
    <input type="text" class="search-input" />
    <el-button icon="el-icon-search" type="primary" round>搜索</el-button>
  </div>
</template>

<script>
export default {
  name: "Search",
  components: {}
};
</script>

<style lang="less" scoped>
#search {
  background: #fff;
  width: 500px;
  height: 40px;
  border: 1px solid #dfe1e5;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.search-input {
  width: 80%;
  height: 30px;
  border: none;
  outline: none;
}

.search-btn {
  width: 20%;
  height: 40px;
  border: 0;
  border-radius: 40px;
  outline: none;
}
</style>
