<template>
  <div id="comment-item">
    <div class="avatar">
      <el-avatar :size="avatarSize" icon="el-icon-user-solid" />
    </div>
    <div class="comment-main">
      <div class="comment-info">
        <div class="comment-info--top">
          <span class="comment-from">{{ commentInfo.author_id }}</span>
          <span class="comment-date">{{
            commentInfo.comment_date | dateFilter
          }}</span>
        </div>
        <div class="comment-substance">{{ commentInfo.comment_content }}</div>
      </div>
      <div class="comment-buttons">
        <el-link icon="el-icon-sunny" :underline="false">{{
          commentInfo.like_count | numberFilter
        }}</el-link>
        <el-link icon="el-icon-heavy-rain" :underline="false">{{
          commentInfo.dislike_count | numberFilter
        }}</el-link>
        <el-link :underline="false">回复</el-link>
      </div>
      <slot name="more-reply"></slot>
    </div>
  </div>
</template>

<script>
import { numberFormat, dateFormat } from "common/utils";

export default {
  name: "CommentItem",
  data() {
    return {
      likeCount: 0,
      dislikeCount: 0
    };
  },
  props: {
    commentInfo: {
      type: Object,
      default: {}
    },
    avatarSize: {
      type: Number,
      default: 40
    }
  },
  filters: {
    numberFilter(value) {
      return numberFormat(value);
    },
    dateFilter(value) {
      let date = new Date(value * 1000);
      return dateFormat(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style lang="less" scoped>
#comment-item {
  margin: 20px 0;
  width: 100%;
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
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        font-size: 1.4em;
        margin-right: 30px;
        color: #666;
      }
    }
  }
}
</style>
