<template>
  <div id="comment-history">
    <Boundary :boundaryTitle="boundaryTitle" />
    <CommentHistoryItem v-for="(item, index) in numList" :key="index" />
  </div>
</template>

<script>
import Boundary from "components/common/boundary/Boundary";

import CommentHistoryItem from "./childComps/CommentHistoryItem";

export default {
  name: "CommentHistory",
  components: {
    Boundary,
    CommentHistoryItem
  },
  data() {
    return {
      boundaryTitle: "评论记录",
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
#comment-history {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 0 1 800px;
}
</style>
