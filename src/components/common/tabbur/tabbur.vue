<template>
  <div>
    <div class="tabbur">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import tabburitem from "./tabbur-item.vue";
export default {
  components: {
    tabburitem,
  },
};
</script>

<style>
.tabbur {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 49px;
  text-align: center;
  align-items: center;
  box-shadow: 0 -1px 10px #ccc;
  background-color: white;
}
</style>