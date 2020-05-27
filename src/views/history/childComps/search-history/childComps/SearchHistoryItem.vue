<template>
  <div id="search-history-item">
    <div class="left">
      <div class="search-words">{{ searchHistory[0].searchWords }}</div>
      <div class="search-date">{{ searchHistory[0].searchDate }}</div>
    </div>
    <div class="right">
      <el-link icon="el-icon-close" :underline="false" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHistoryItem",
  props: {
    type: Array,
    default() {
      return [];
    }
  },
  data() {
    return {
      searchHistory: [
        {
          searchWords: "Webpack教程",
          searchDate: "1天前"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#search-history-item {
  width: 100%;
  margin-top: 30px;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-basis: 240px;
    flex-grow: 1;
    flex-shrink: 1;

    .search-words {
      color: #fff;
      font-size: 1.8em;
      margin-bottom: 10px;
    }

    .search-date {
      color: #444;
      font-size: 1.4em;
    }
  }

  .right {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;

    a {
      color: #fff;
      font-size: 3em;
    }
  }
}
</style>
