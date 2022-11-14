<template>
  <swiper ref="aaa" class="swiper" v-if="swiperImgs.length != 1">
    <item v-for="(value, index) in swiperImgs" :key="index"
      ><img :src="value" alt="" @load="swiperStart"
    /></item>
  </swiper>
  <div v-else class="dan">
    <img :src="swiperImgs[0]" alt="" @load="swiperStart" />
  </div>
</template>

<script>
import { swiper, item } from "components/common/swiper/swiper.js";

export default {
  data() {
    return {
      lodingIndex: 0,
    };
  },
  components: {
    swiper,
    item,
  },
  props: {
    swiperImgs: {
      type: Array,
      default: [],
    },
  },
  methods: {
    swiperStart() {
      this.lodingIndex += 1;
      if (this.lodingIndex == this.swiperImgs.length) {
        this.$refs.aaa && this.$refs.aaa.start();
        this.$emit("imgload");
      }
    },
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 400px;
}
.dan {
  width: 100%;
  height: 400px;
}
.dan img {
  width: 100%;
  height: 400px;
}
</style>