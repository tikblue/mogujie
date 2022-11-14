<template>
  <div class="wrapper" ref="wrapper">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
export default {
  props: {
    probe: {
      type: Number,
      default: 0,
    },
    pullUp: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bs: null,
      option: {
        probeType: this.probe,
        click: true,
        pullUpLoad: this.pullUp,
      },
    };
  },
  mounted() {
    BScroll.use(Pullup);
    this.bs = new BScroll(this.$refs.wrapper, this.option);
    if (this.probe != 0) {
      this.bs.on("scroll", (postion) => {
        this.$emit("scroll", postion);
      });
    }
    if (this.pullUp) {
      this.bs.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.bs.scrollTo(x, y, time);
    },
    scrollrefresh() {
      this.bs.refresh();
      /*       console.log("计算距离"); */
    },
  },
};
</script>

<style scoped>
</style>