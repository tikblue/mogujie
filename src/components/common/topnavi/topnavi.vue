<template>
  <div id="navi">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"> </slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#navi {
  display: flex;
  width: 100%;
  line-height: 39px;
  z-index: 10;
}
.left,
.right {
  width: 60px;
  height: 39px;
}
.center {
  flex: 1;
}
</style>