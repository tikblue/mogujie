<template>
  <div class="w">
    <div :class="{ che: !flag, stac: flag }">
      <img src="~assets/images/cart/tick.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flag: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.w {
  width: 20px;
  margin: 0 5px;
  position: relative;
}

.w > div {
  width: 17px;
  border-radius: 50%;
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
}
.w img {
  vertical-align: middle;
  height: 90%;
}
.stac {
  background-color: pink;
}
.che {
  border: 1.5px solid #aaa;
  background-color: white;
}
</style>