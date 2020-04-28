<template>
  <div id="comment-item">
    <div class="avatar">
      <el-avatar :size="40" icon="el-icon-user-solid" />
    </div>
    <div class="comment-main">
      <div class="comment-info">
        <div class="comment-info--top">
          <span class="comment-from">{{ commentInfo.commentFrom }}</span>
          <span class="comment-date">{{ commentInfo.commentDate }}</span>
        </div>
        <div class="comment-substance">{{ commentInfo.commentSubstance }}</div>
      </div>
      <div class="comment-buttons">
        <el-link icon="el-icon-sunny" :underline="false">{{
          commentInfo.likeCount
        }}</el-link>
        <el-link icon="el-icon-heavy-rain" :underline="false">{{
          commentInfo.dislikeCount
        }}</el-link>
        <el-link :underline="false">回复</el-link>
      </div>
      <div class="show-more">
        查看 {{ commentInfo.commentReply.length }} 条回复
        <i class="el-icon-caret-bottom"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    commentInfo: {
      type: Object,
      default: {}
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#comment-item {
  margin: 30px 0;
  text-align: start;
  font-size: 10px;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .comment-main {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .comment-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .comment-info--top {
        font-size: 1.4em;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .comment-from {
          font-weight: 900;
        }

        .comment-date {
          margin-left: 10px;
          color: #666;
        }
      }

      .comment-substance {
        margin-top: 6px;
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 1.6em;
      }
    }

    .comment-buttons {
      margin-top: 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        font-size: 1.4em;
        margin-right: 10px;
        color: #666;
      }
    }

    .show-more {
      font-size: 1.4em;
      color: #409eff;
    }
  }
}
</style>
