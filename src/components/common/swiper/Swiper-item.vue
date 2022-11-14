<template>
  <div class="swiper-item"><slot></slot></div>
</template>

<script>
export default {};
</script>

<style scoped>
.swiper-item {
  flex: 1;
  height: 100%;
}
.swiper-item img {
  width: 100%;
  height: 100%;
}
</style>