<template>
  <div id="search-history">
    <Boundary :boundaryTitle="boundaryTitle" />
    <SearchHistoryItem v-for="(item, index) in numList" :key="index" />
  </div>
</template>

<script>
import Boundary from "components/common/boundary/Boundary";

import SearchHistoryItem from "./childComps/SearchHistoryItem";

export default {
  name: "SearchHistory",
  components: {
    Boundary,
    SearchHistoryItem
  },
  data() {
    return {
      boundaryTitle: "搜索记录",
      numList: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#search-history {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 0 1 800px;
}
</style>
