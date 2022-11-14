<template>
  <div class="cont">
    <check @click.native="check" :flag="single.checked" />
    <div><img :src="single.img" alt="" /></div>
    <div class="text">
      <h3>{{ single.title }}</h3>
      <p>{{ single.desc }}</p>
      <span class="price">¥{{ single.price }}</span>
      <span class="num">X{{ single.num }}</span>
    </div>
  </div>
</template>

<script>
import check from "components/content/check/check";
export default {
  props: {
    single: {
      type: Object,
      default: {},
    },
  },
  components: {
    check,
  },
  methods: {
    check() {
      this.$store.commit("check", this.single.iid);
      this.single.checked = !this.single.checked;
    },
  },
};
</script>

<style scoped>
.cont {
  display: flex;
  width: 100%;
  height: 140px;
  padding: 10px 0;
  border-bottom: 2px solid #ccc;
}
.cont img {
  height: 100%;
}
h3,
p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text {
  overflow: hidden;
  padding: 0 10px;
  flex: 1;
}
h3 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
}
p {
  margin-bottom: 40px;
}
.price {
  float: left;
  color: tomato;
  font-size: 20px;
}

.num {
  float: right;
}
</style>