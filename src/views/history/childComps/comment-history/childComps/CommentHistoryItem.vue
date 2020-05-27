<template>
  <div id="comment-history-item">
    <div class="comment-subject">
      <span v-if="commentHistory[0].commentOrRepeat === 0">发表了对：</span>
      <span v-if="commentHistory[0].commentOrRepeat === 1"
        >回复了一条针对：
      </span>
      <el-link :underline="false">
        {{ commentHistory[0].commentSubject }}
      </el-link>

      <span>的评论</span>
    </div>
    <div class="comment-words">{{ commentHistory[0].commentWords }}</div>
    <div class="comment-date">{{ commentHistory[0].commentDate }}</div>
  </div>
</template>

<script>
export default {
  name: "CommentHistoryItem",
  data() {
    return {
      commentHistory: [
        {
          commentOrRepeat: 0,
          commentSubject: "后盾人JavaScript教程",
          commentWords: "老师讲的很细，也容易理解，很难得的JS教程。",
          commentDate: "1天前"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#comment-history-item {
  width: 100%;
  margin-top: 30px;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .comment-subject {
    font-size: 1.6em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-size: 1em;
    }
  }

  .comment-words {
    margin-top: 10px;
    font-size: 1.6em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .comment-date {
    margin-top: 10px;
    color: #444;
    font-size: 1.4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
