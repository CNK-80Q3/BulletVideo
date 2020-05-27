<template>
  <div id="queue-header">
    <div class="title">
      <span class="title-text">队列</span>
      <span class="queue-count">{{ 3 }} / {{ 3 }}</span>
    </div>
    <div class="list-control">
      <div class="queue-control">
        <span>保存</span>
        <span>清空</span>
      </div>
      <i class="el-icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "QueueHeader"
};
</script>

<style lang="less" scoped>
#queue-header {
  width: 100%;
  height: 70px;
  padding: 10px 10px;
  color: #fff;
  font-size: 10px;
  background-color: #1e1e1e;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    height: 100%;
    font-size: 1.8em;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .queue-count {
      color: #aaa;
      font-weight: normal;
    }
  }

  .list-control {
    height: 100%;
    font-size: 1.6em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    span {
      margin-left: 10px;
      color: #409eff;
    }

    i {
      color: #aaa;
      font-size: 1.4em;
    }
  }
}
</style>
