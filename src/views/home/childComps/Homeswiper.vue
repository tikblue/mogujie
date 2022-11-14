<template>
  <div>
    <swiper ref="aaa" class="swiper">
      <item v-for="(value, index) in banner" :key="index"
        ><a :href="value.link"
          ><img :src="value.image" :alt="value.title" @load="imgload" /></a
      ></item>
    </swiper>
  </div>
</template>

<script>
import { swiper, item } from "components/common/swiper/swiper.js";
export default {
  components: {
    swiper,
    item,
  },
  props: {
    banner: {
      type: Array,
      default: [],
    },
  },
  methods: {
    imgload() {
      this.nums += 1;
      if (this.nums == this.banner.length) {
        this.$refs.aaa.start();
        this.$bus.$emit("offsettop");
      }
    },
  },

  data() {
    return {
      nums: 0,
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 230px;
}
</style>