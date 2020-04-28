<template>
  <div id="comment-area">
    <div class="comment-head">
      <div class="comment-count">
        <div>{{ 500 }}条评论</div>
      </div>
      <div class="sorted-by">
        <el-link icon="el-icon-tickets" :underline="false">排序方式</el-link>
      </div>
    </div>
    <div class="comment-main">
      <el-avatar :size="40" icon="el-icon-user-solid" />
      <div class="comment-input">
        <label for="comment" class="comment-label">留个评论再走吧 ...</label>
        <input id="comment" type="text" @focus="inputFocus" @blur="inputBlur" />
      </div>
    </div>
    <div class="comment-buttons" :class="{ hide: buttonsHide }">
      <el-button plain @click="inputBlur">取消</el-button>
      <el-button type="primary">评论</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentArea",
  data() {
    return {
      buttonsHide: true
    };
  },
  methods: {
    inputFocus() {
      const commentBtns = document.querySelector(".comment-buttons");
      const commentLabel = document.querySelector(".comment-label");

      commentBtns.style.display = "flex";
      commentLabel.style.top = "0";
    },
    inputBlur() {
      const commentBtns = document.querySelector(".comment-buttons");
      const commentLabel = document.querySelector(".comment-label");

      commentBtns.style.display = "none";
      commentLabel.style.top = "20px";
    }
  }
};
</script>

<style lang="less" scoped>
#comment-area {
  margin-top: 10px;
  margin-bottom: 50px;
  width: 100%;
  color: #fff;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .comment-head {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 20px;

    .comment-count {
      margin-right: 20px;
      font-size: 1.8em;
    }

    .sorted-by {
      a {
        font-size: 1.6em;
        color: #444;
      }
    }
  }

  .comment-main {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .comment-input {
      margin-left: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      label {
        position: relative;
        top: 20px;
        height: 20px;
        font-size: 14px;
        transition-duration: 0.3s;
        cursor: pointer;
        z-index: 100;
      }

      input {
        position: relative;
        top: -10px;
        width: 100%;
        height: 40px;
        border: none;
        background-color: #131313;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        outline: none;
        font-size: 16px;
        color: #fff;
        caret-color: #fff;
        transition-duration: 0.3s;
      }

      input:focus {
        border-bottom: 1px solid rgba(255, 255, 255, 0.6);
      }
    }
  }

  .comment-buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .hide {
    display: none;
  }
}
</style>
