<template>
  <div v-if="Object.keys(shopinfo).length != 0">
    <div class="name">
      <img :src="shopinfo?.shopLogo" alt="" />
      <span>{{ shopinfo?.name }}</span>
    </div>
    <div class="info">
      <div class="stock">
        <div>
          <p>{{ cSells }}</p>
          <p>总销量</p>
        </div>
        <div class="i">
          <p>{{ shopinfo?.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="score">
        <div v-for="(value, index) in shopinfo?.score" :key="index">
          <span>{{ value.name }}</span>
          <span
            :class="{ highbranch: value.isBetter, lowbranch: !value.isBetter }"
            >{{ value.score }}</span
          >
        </div>
      </div>
    </div>
    <div class="jindian"><span>进店逛逛</span></div>
  </div>
</template>

<script>
import numFixed from "@/common/utils/numFixed";

export default {
  props: {
    shopinfo: {
      type: Object,
      default: {},
    },
  },
  computed: {
    cSells() {
      let num = this.shopinfo?.cSells;
      if (!num) {
        return;
      }
      return numFixed(num, 1);
    },
  },
};
</script>

<style scoped>
.i {
  border-right: 2px solid #ccc;
}

.name {
  margin: 10px 5px 0 10px;
  color: rgb(62, 59, 59);
}
.name img {
  width: 10%;
  margin-right: 8px;
  vertical-align: middle;
}
.info {
  display: flex;
}
.info .stock {
  display: flex;
  flex: 1;
  height: 110px;
  align-items: center;
}

.info .stock div {
  flex: 1;
  text-align: center;
}
.info .stock div p {
  margin: 5px;
}

.info .score {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.info .score span {
  display: inline-block;
  margin: 0 5px;
}
.highbranch {
  width: 50px;
  color: red;
}
.lowbranch {
  width: 50px;
  color: rgb(60, 146, 60);
}

.highbranch::after {
  content: "高";
  background-color: red;
  color: white;
  float: right;
}
.lowbranch::after {
  content: "低";
  background-color: rgb(60, 146, 60);
  color: white;
  float: right;
}
.jindian {
  text-align: center;
}
.jindian span {
  display: inline-block;
  width: 200px;
  height: 50px;
  line-height: 50px;
  border-radius: 15px;
  color: rgb(54, 51, 51);
  background-color: rgba(234, 229, 229, 0.856);
}
</style>