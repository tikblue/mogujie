<template>
  <div class="recom-item">
    <a href="javascript:;" @click="detailroute">
      <img @load="imgload" :src="img" alt=""
    /></a>
    <p>{{ prc.title }}</p>
    <div class="price">
      <span>{{ prc.price }}</span>
      <i>{{ prc.cfav }}</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prc: { type: Object, default: {} },
  },
  methods: {
    imgload() {
      this.$store.commit("imgchange");
      /*   console.log("加载图片"); */
    },
    detailroute() {
      this.$router.push(`/detail/${this.prc.iid}`);
    },
  },
  computed: {
    img() {
      return this.prc.show?.img || this.prc.image;
    },
  },
};
</script>

<style  scoped>
.recom-item {
  width: 47%;
}
.recom-item img {
  width: 100%;
}
P {
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.price {
  text-align: center;
  font-size: 15px;
  color: pink;
}
.price span::after {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-image: url("assets/images/detail/detail_bottom.png");
  background-size: cover;
}
.price i {
  font-style: normal;
  font-size: 8px;
  color: black;
}
</style>