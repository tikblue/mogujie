<template>
  <div id="swiper">
    <div
      class="slide"
      ref="slide"
      :style="{
        left: `-${offset}`,
        transform: `translateX(${movePointx + 'px'})`,
        width: `calc(100% * ${this.elenum + 2})`,
      }"
      @touchstart="movedown"
      @touchend="moveend"
      @touchmove="move"
      @transitionend="smscroll"
    >
      <slot></slot>
    </div>
    <ul class="focus-btn">
      <li
        class="btn"
        :class="{ current: ulindex === index - 1 }"
        v-for="(item, ulindex) in elenum"
        :key="ulindex"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elenum: 0, //商品元素个数
      offset: "", //每个商品元素的的大小
      pointxOne: 0, //第一次触碰的点
      movePointx: 0, //最终效果距离
      currentMove: 0, //手指拖动的距离
      endMove: 0, // 解决 手指拖动距离会加上最终距离的移动的bug 记录已经移动的距离
      index: 1, // 有了这个index 我们知道在什么时候无缝连接 和auto播放
      slide: null, // 因为这个元素对象经常被用到
      setInterval: null, //可以用来取消定时器
    };
  },
  mounted() {
    this.slide = this.$refs.slide;
  },
  methods: {
    clone() {
      let items = document.querySelectorAll(".swiper-item");
      let iteml = items[items.length - 1].cloneNode(true);
      let itemr = items[0].cloneNode(true);
      this.elenum = items.length;
      this.slide.append(itemr);
      this.slide.prepend(iteml);
    },
    cleft() {
      this.offset = document.querySelector(".swiper").clientWidth + "px";
    },
    movedown(e) {
      clearInterval(this.setInterval);
      this.slide.style.transition = ` all ${this.moveRatio}s`;
      let finger = e.targetTouches[0];
      this.pointxOne = finger.clientX;
    },
    move(e) {
      let finger = e.targetTouches[0];
      this.currentMove = finger.clientX - this.pointxOne;
      this.movePointx = this.endMove + this.currentMove;
    },
    moveend(e) {
      //图片往左边走
      if (this.currentMove < 0 && this.currentMove < -80) {
        this.endMove += -parseInt(this.offset);
        this.index++;
        this.movePointx = this.endMove;
      } else {
        this.movePointx = this.endMove;
      }
      //图片往右边走
      if (this.currentMove > 0 && this.currentMove > 80) {
        this.endMove += parseInt(this.offset);
        this.movePointx = this.endMove;
        this.index--;
      } else {
        this.movePointx = this.endMove;
      }
      this.currentMove = 0;
      this.auto();
    },
    smscroll() {
      if (this.index == 0) {
        //取消过渡
        //回到真位置 现在问位置的px多少
        this.movePointx = -parseInt(this.offset) * (this.elenum - 1);
        this.slide.style.transition = "none";
        this.endMove = this.movePointx;
        this.index = this.elenum;
      } else if (this.index >= this.elenum + 1) {
        this.slide.style.transition = "none";
        this.movePointx = 0;
        this.endMove = 0;
        this.index = 1;
      }
    },
    auto() {
      this.setInterval = setInterval(() => {
        if (this.index == 1 || this.index == 4) {
          this.slide.style.transition = ` all ${this.moveRatio}s`;
        }
        this.movePointx = -parseInt(this.offset) * this.index++;
        this.endMove = this.movePointx;
      }, this.interval); //这里可以让外面自定义时间
    },
    start() {
      this.clone(); //执行 前后克隆
      this.cleft(); //执行 偏移 将真第一张图放到视图位置
      this.auto(); //自动轮播
    },
  },
  props: {
    interval: {
      type: Number,
      default: 3000,
    },
    moveRatio: {
      type: Number,
      default: 0.25,
    },
  },
};
</script>

<style scoped>
#swiper {
  position: relative;
  overflow: hidden;
  background-color: #ccc;
}

.slide {
  position: relative;
  display: flex;
  height: 100%;
  top: 0;
}

.focus-btn {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5px;
}
.focus-btn .btn {
  width: 5px;
  height: 6px;
  border-radius: 3px;
  margin: 0 2px;
  background-color: white;
  transition: all 0.3s;
}
.current {
  width: 15px !important;
}
</style>

