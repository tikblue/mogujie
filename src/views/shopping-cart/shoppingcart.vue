<template>
  <div class="cart">
    <navi />
    <scroll class="content" ref="scroll"><goodes /></scroll>
    <tool />
  </div>
</template>

<script>
import navi from "./childComps/cartnavi.vue";
import goodes from "./childComps/cartgoods.vue";
import scroll from "components/common/Scroll/scroll";
import tool from "./childComps/carttoolbar.vue";

export default {
  data() {
    return {};
  },
  components: { navi, goodes, scroll, tool },
  activated() {
    this.$refs.scroll.scrollrefresh();
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.content {
  height: calc(100% - 39px - 49px - 49px);
  overflow: hidden;
}
</style>