<template>
  <div id="play-queue">
    <QueueHeader />
    <div class="queue-container">
      <draggable>
        <transition-group>
          <QueueItem v-for="(item, index) in [1, 2, 3]" :key="item" />
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

import QueueHeader from "./childComps/QueueHeader";
import QueueItem from "./childComps/QueueItem";

export default {
  name: "PlayQueue",
  components: {
    draggable,
    QueueHeader,
    QueueItem
  }
};
</script>

<style lang="less" scoped>
#play-queue {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .queue-container {
    padding: 4px 4px;
  }
}
</style>
