<template>
  <div id="history-category">
    <div
      class="history-category-item"
      v-for="(item, index) in historyCategoryList"
      :key="item.id"
    >
      <router-link :to="item.path">
        <div class="category-link-content" @click="itemSelect(item.id)">
          <span>{{ item.title }}</span>
          <RadioButton :isChecked="index === currentCategory" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import RadioButton from "./childComps/RadioButton";

export default {
  name: "HistoryCategory",
  components: {
    RadioButton
  },
  data() {
    return {
      currentCategory: 0
    };
  },
  props: {
    historyCategoryList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemSelect(id) {
      this.currentCategory = id;
    }
  }
};
</script>

<style lang="less" scoped>
#history-category {
  margin-top: 20px;
  width: 100%;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .history-category-item {
    padding: 0 20px;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      width: 100%;

      .category-link-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        span {
          color: #fff;
          font-size: 1.8em;
        }
      }
    }
  }

  .history-category-item:first-of-type {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
