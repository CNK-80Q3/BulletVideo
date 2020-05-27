<template>
  <div id="toolbar-item">
    <Icon :iconSrc="icon.src" size="24" />
    <span>{{ count | numberFilter }}</span>
  </div>
</template>

<script>
import { numberFormat } from "common/utils";

import Icon from "components/common/icon/Icon";

export default {
  name: "ToolbarItem",
  components: {
    Icon
  },
  props: {
    icon: {
      type: Object,
      default() {
        return {};
      }
    },
    count: {
      type: Number
    }
  },
  filters: {
    numberFilter(value) {
      return numberFormat(value);
    }
  }
};
</script>

<style lang="less" scoped>
#toolbar-item {
  margin: 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
