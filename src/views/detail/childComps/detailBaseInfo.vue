<template>
  <div v-if="Object.keys(baseinfo).length != 0">
    <div class="name">
      <h3>{{ desc }}</h3>
    </div>
    <div class="price">
      <span class="present"> ￥{{ highNowPrice }}</span>
      <span class="primary">￥{{ highPrice }}</span>
      <span
        v-if="discountDesc"
        class="discount"
        :style="{ backgroundColor: discountBgColor }"
      >
        {{ discountDesc }}</span
      >
    </div>
    <div class="heat">
      <span v-for="(value, index) in baseinfo?.columns" :key="index">{{
        value
      }}</span>
    </div>
    <div class="post">
      <div v-for="(value, index) in baseinfo?.postinfo" :key="index">
        <img :src="value.icon" alt="" /><span>{{ value.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseinfo: {
      type: Object,
      default: {},
    },
  },
  computed: {
    desc() {
      return this.baseinfo?.commodity.title;
    },
    highNowPrice() {
      return this.baseinfo?.commodity.highNowPrice;
    },
    highPrice() {
      return this.baseinfo?.commodity.highPrice;
    },
    discountBgColor() {
      return this.baseinfo?.commodity.discountBgColor;
    },
    discountDesc() {
      return this.baseinfo?.commodity.discountDesc;
    },
  },
};
</script>

<style scoped>
.name {
  padding: 6px;
}
.name h3 {
  font-weight: 500;
}
.price {
  display: flex;
  align-items: flex-end;
}
.price .present {
  color: rgb(254, 113, 136);
  font-size: 25px;
}
.price .primary {
  color: rgb(168, 162, 162);
  text-decoration: line-through;
}
.price .discount {
  display: inline-block;
  align-self: center;
  padding: 5px;
  border-radius: 8px;
  color: aliceblue;
}
.price span {
  margin: 0 3px;
}
.heat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: solid 3px rgb(249, 244, 244);
  color: rgb(163, 158, 158);
}
.post {
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 65px;
  border-bottom: solid 3px rgb(249, 244, 244);
}
.post div {
  flex: 1;
  text-align: center;
}
.post img {
  vertical-align: top;
  width: 14%;
}
</style>