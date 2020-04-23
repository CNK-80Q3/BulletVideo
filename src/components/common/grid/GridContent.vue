<template>
  <div id="grid-content">
    <slot name="item"></slot>
  </div>
</template>

<script>
export default {
  name: "GridView"
};
</script>

<style scoped>
#grid-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 0.5em;
}
</style>
