<template>
  <div id="home">
    <topnavi />
    <control
      :arr="['流行', '新款', '精选']"
      @qiehuan="activeindex"
      ref="control1"
      v-show="controlflag"
      class="control2"
    />
    <scroll
      class="content"
      ref="scroll"
      @scroll="scrollposition"
      :probe="3"
      :pullUp="true"
      @pullingUp="pullingUp"
    >
      <mergeSwiper :banner="banner" />
      <activity :recommend="recommend" />
      <pop />
      <control
        :arr="['流行', '新款', '精选']"
        @qiehuan="activeindex"
        ref="control2"
        :class="{ control1: !controlflag }"
      />
      <recommend :good="goods[active].list" />
    </scroll>
    <backtop @click.native="top" v-show="showflag" />
  </div>
</template>

<script>
import { getHomeMultiData, getgoods } from "network/home.js";
import debounce from "@/common/utils/debounce";

import mi2 from "@/common/minxin/backtop";

import control from "components/content/tabControl/Tabcontrol";
import recommend from "components/content/recommend/recommend";

import scroll from "components/common/Scroll/scroll.vue";

import topnavi from "./childComps/Hometopnavi.vue";
import activity from "./childComps/Homeactivity.vue";
import mergeSwiper from "./childComps/Homeswiper.vue";
import pop from "./childComps/Homepopular.vue";

export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      active: "pop",
      derefresh: null,
      offtop: 0,
      controlflag: false,
      controlIndex: 0,
      leaveTop: 0,
    };
  },

  components: {
    topnavi,
    mergeSwiper,
    activity,
    pop,
    control,
    recommend,
    scroll,
  },
  created() {
    this.getHomeMultiData();
    this.getgoods("pop");
    this.getgoods("new");
    this.getgoods("sell");
  },
  mounted() {
    this.derefresh = debounce(this.$refs.scroll.scrollrefresh);
    this.$bus.$on("offsettop", () => {
      this.offtop = this.$refs.control2.$el.offsetTop;
    });
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    async getgoods(type) {
      let page = (this.goods[type].page += 1);
      let data = await getgoods(type, page);
      this.goods[type].list.push(...data.data.list);
    },
    activeindex(index) {
      switch (index) {
        case 0:
          this.active = "pop";
          break;
        case 1:
          this.active = "new";
          break;
        case 2:
          this.active = "sell";
          break;
      }
      this.controlIndex = index;
    },
    scrollposition(position) {
      this.lisenshow(position);
      this.controlflag = -position.y > this.offtop;
    },
    async pullingUp() {
      let op = await this.getgoods(this.active);
      this.$refs.scroll.bs.finishPullUp();
    },
  },
  computed: {
    ad() {
      return this.$store.state.imgvalue;
    },
  },
  watch: {
    ad: {
      //这个地方挂载后绑定函数、图片加载比这个生命周期慢。
      handler: function (newvalue, oldvalue) {
        this.derefresh && this.derefresh(200);
      },
    },
    controlIndex(newvalue, oldvalue) {
      this.$refs.control1.pck = this.$refs.control2.pck = newvalue;
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.leaveTop, 0);
    this.derefresh = debounce(this.$refs.scroll.scrollrefresh);
  },
  deactivated() {
    this.leaveTop = this.$refs.scroll.bs.y;
    this.derefresh = null;
  },
  mixins: [mi2],
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 39px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.control1 {
  position: fixed;
  top: 40px;
}
.control2 {
  position: relative;
  z-index: 10;
}
</style>