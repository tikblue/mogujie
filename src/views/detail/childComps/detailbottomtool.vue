<template>
  <div class="tool">
    <div class="left">
      <div>
        <div class="bcimg"></div>
        <div>客服</div>
      </div>
      <div>
        <div class="bcimg"></div>
        <div>店铺</div>
      </div>
      <div>
        <div class="bcimg"></div>
        <div>收藏</div>
      </div>
    </div>
    <div class="right">
      <div @click="shoppingCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    shoppingCart() {
      this.$emit("cart");
    },
  },
};
</script>

<style scoped>
.tool {
  display: flex;
  height: 49px;
  background-color: white;
  position: relative;
  z-index: 10;
}

.left {
  flex: 1;
  display: flex;
}

.left > div {
  flex: 1;
  text-align: center;
  font-size: 14px;
  margin-top: 3px;
}

.bcimg {
  height: 28px;
  background-size: 28px;
  width: 100%;
  background-image: url("assets/images/detail/detail_bottom.png");
  background-repeat: no-repeat;
}
.left div:nth-child(1) .bcimg {
  background-position: center -65px;
}
.left div:nth-child(2) .bcimg {
  background-position: center -124px;
}
.left div:nth-child(3) .bcimg {
  background-position: center 2px;
}

.right {
  flex: 1;
  display: flex;
  text-align: center;
  line-height: 49px;
}
.right div:nth-child(1) {
  flex: 1;
  background-color: yellow;
  color: black;
}
.right div:nth-child(2) {
  flex: 1;
  background-color: rgb(243, 112, 134);
  color: white;
}
</style>