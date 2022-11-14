<template>
  <div id="detail">
    <navi
      :controlStr="['商品', '参数', '评论', '推荐']"
      @navi="naviManualtwo"
      :naviIndex="naviIndex"
    />
    <scroll ref="scroll" class="content" :probe="3" @scroll="naviAutotwo">
      <swiper :swiperImgs="swiperImgs" @imgload="refresh" />
      <baseInfo :baseinfo="baseinfo" />
      <shopinfo :shopinfo="shopinfo" />
      <goodes ref="goodes" :goodes="detailImage" @imgload="refresh" />
      <params :parems="detailparams" />
      <comment ref="comment" :comment="comment" />
      <recommed ref="recommed" :recommends="recommends" />
    </scroll>
    <backtop @click.native="top" v-show="showflag" />
    <tool @cart="cart" />
  </div>
</template>

<script>
import {
  getdata,
  getrecommend,
  DetailShopInfo,
  DetaParamsInfo,
} from "network/detail";

import scroll from "components/common/Scroll/scroll";

import mi1 from "@/common/minxin/recommendMixin";
import mi2 from "@/common/minxin/backtop";

import navi from "./childComps/detailNavi";
import swiper from "./childComps/detailSwiper.vue";
import baseInfo from "./childComps/detailBaseInfo.vue";
import shopinfo from "./childComps/detailShopInfo.vue";
import goodes from "./childComps/dedailGoodes.vue";
import params from "./childComps/dedailparams.vue";
import comment from "./childComps/detailComment.vue";
import recommed from "./childComps/dedailrecommed.vue";
import tool from "./childComps/detailbottomtool.vue";

export default {
  name: "detaill",
  data() {
    return {
      swiperImgs: [],
      baseinfo: {},
      shopinfo: {},
      detailImage: {},
      detailparams: {},
      comment: {},
      recommends: [],
      naviIndex: 0,
      allOffsetTop: [],
    };
  },
  created() {
    getdata(this.$route.params.iid).then((data) => {
      let result = data.result;
      // 获取轮播图信息
      this.swiperImgs = result.itemInfo.topImages;
      // 获取价格 商品名 销量等信息
      this.baseinfo = new DetailShopInfo(
        result.itemInfo,
        result.columns,
        result.shopInfo.services
      );
      //获取店铺信息
      this.shopinfo = result.shopInfo;
      //获取商品图片信息
      this.detailImage = result.detailInfo;
      //产品参数信息
      this.detailparams = new DetaParamsInfo(
        result.itemParams.info.set,
        result.itemParams.rule.tables
      );
      //评论信息
      this.comment = result.rate.list ? result.rate.list[0] : {};
    });
    getrecommend().then((data) => {
      this.recommends = data.data.list;
    });
  },
  components: {
    navi,
    swiper,
    baseInfo,
    scroll,
    shopinfo,
    goodes,
    params,
    comment,
    recommed,
    tool,
  },
  methods: {
    refresh() {
      this.$refs.scroll.scrollrefresh();
      this.allOffsetTop = [];
      this.allOffsetTop.push(0);
      this.allOffsetTop.push(this.$refs.goodes.$el.offsetTop);
      this.allOffsetTop.push(this.$refs.comment.$el.offsetTop);
      this.allOffsetTop.push(this.$refs.recommed.$el.offsetTop);
      this.allOffsetTop.push(Infinity);
    },
    naviManualone(index) {
      let topvalue = "";
      switch (index) {
        case 0:
          this.$refs.scroll.scrollTo(0, 0);
          break;
        case 1:
          topvalue = this.$refs.goodes.$el.offsetTop;
          this.$refs.scroll.scrollTo(0, -topvalue);
          break;
        case 2:
          topvalue = this.$refs.comment.$el.offsetTop;
          this.$refs.scroll.scrollTo(0, -topvalue);
          break;
        case 3:
          topvalue = this.$refs.recommed.$el.offsetTop;
          this.$refs.scroll.scrollTo(0, -topvalue);
          break;
      }
    },
    naviAutoone(position) {
      if (-position.y < this.$refs.goodes.$el.offsetTop) {
        this.naviIndex = 0;
      } else if (-position.y < this.$refs.comment.$el.offsetTop) {
        this.naviIndex = 1;
      } else if (-position.y < this.$refs.recommed.$el.offsetTop) {
        this.naviIndex = 2;
      } else {
        this.naviIndex = 3;
      }
    },
    naviManualtwo(index) {
      this.$refs.scroll.scrollTo(0, -this.allOffsetTop[index]);
    },
    naviAutotwo(position) {
      /*   for (let i = 0; i < this.allOffsetTop.length; i++) {
        if (
          -position.y > this.allOffsetTop[i] &&
          (i == this.allOffsetTop.length - 1 ||
            -position.y < this.allOffsetTop[+i + 1])
        ) {
          if (i == this.allOffsetTop.length - 1) {
            this.naviIndex = i;
          }
          this.naviIndex = i;
        }
      }*/
      this.lisenshow(position);
      for (let i = 0; i < this.allOffsetTop.length - 1; i++) {
        if (
          -position.y > this.allOffsetTop[i] &&
          -position.y < this.allOffsetTop[+i + 1]
        )
          this.naviIndex = i;
      }
    },
    cart() {
      let shoppingcartInfo = {};
      shoppingcartInfo.img = this.swiperImgs[0];
      shoppingcartInfo.title = this.baseinfo.commodity.title;
      shoppingcartInfo.desc = this.baseinfo.commodity.desc;
      shoppingcartInfo.price = this.baseinfo.commodity.highNowPrice;
      shoppingcartInfo.iid = this.baseinfo.commodity.iid;
      this.$store.dispatch("addcart", shoppingcartInfo).then((da) => {
        this.$toast.show(da, 600);
      });
    },
  },
  mixins: [mi1, mi2],
};
</script>

<style  scoped>
#detail {
  height: 100vh;
}
.content {
  position: relative;
  top: 0;
  height: calc(100% - 39px - 49px);
  overflow: hidden;
  background-color: white;
  z-index: 12;
}
</style>