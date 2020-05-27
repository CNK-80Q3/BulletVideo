<template>
  <div class="radio-button" :class="{checked: isChecked}">
    <div class="check" :class="{checked: isChecked}"></div>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.radio-button {
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  border: 2px solid #666;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .check {
    width: 70%;
    height: 70%;
    background-color: #409eff;
    border-radius: 50%;
    visibility: hidden;
  }

  .checked {
    visibility: visible;
  }
}
.checked {
  visibility: visible;
  border-color: #409eff;
}
</style>