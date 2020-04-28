<template>
  <div id="author-info">
    <div class="author">
      <div class="author-main">
        <el-avatar :size="50" icon="el-icon-user-solid" />
        <div>
          <div class="author-name" @click="aboutAuthor">
            天狗衛視
          </div>
          <span>22.5万订阅者</span>
        </div>
      </div>
      <div class="buttons">
        <el-button type="primary" round>订阅</el-button>
      </div>
    </div>
    <div class="author-message">
      【關注本頻道】：https://www.youtube.com/c/天狗衛視
      【Instagram】：https://www.instagram.com/tengumedia/
      【Facebook】https://www.facebook.com/tengumedia/
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorInfo",
  props: {
    authorInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    aboutAuthor() {
      // this.$router.push("/author");
    }
  }
};
</script>

<style lang="less" scoped>
#author-info {
  margin-top: 10px;
  width: 100%;
  color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .author {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .author-main {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        margin: 0 10px;

        .author-name {
          margin: 0;
          font-size: 18px;
          line-height: 1.5em;
          text-align: start;
        }

        span {
          color: #aaaaaa;
        }
      }
    }
  }

  .author-message {
    margin-top: 20px;
  }
}
</style>
