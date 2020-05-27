<template>
  <div id="watch-history">
    <Boundary :boundaryTitle="boundaryTitle" />
    <WatchHistoryItem
      v-for="(item, index) in videoInfo"
      :videoInfo="item"
      :key="index"
    />
  </div>
</template>

<script>
import Boundary from "components/common/boundary/Boundary";

import WatchHistoryItem from "./childComps/WatchHistoryItem";

import { getWatchHistoriesByUserId, WatchHistories } from "network/history";
export default {
  name: "WatchHistory",
  components: {
    Boundary,
    WatchHistoryItem
  },
  data() {
    return {
      boundaryTitle: "观看记录",
      videoInfo: [],
      userId: 0
    };
  },
  methods: {
    getWatchHistories(id) {
      getWatchHistoriesByUserId(id).then(res => {
        let videoData = new WatchHistories(res);
        this.videoInfo = videoData.histories;
      });
    }
  },
  created() {
    this.userId = this.$route.params.id;
    this.getWatchHistories(this.userId);
  }
};
</script>

<style lang="less" scoped>
#watch-history {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 0 1 800px;
}
</style>
