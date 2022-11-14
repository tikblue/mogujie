<template>
  <div>
    <span v-for="(item, index) in recommend" :key="index"
      ><a :href="item.link"><img :src="item.image" alt="" /></a>
      <p>{{ item.title }}</p></span
    >
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  height: 145px;
  text-align: center;
  border-bottom: 10px solid rgb(231, 228, 228);
}
span {
  flex: 1;
  margin: 14px 0;
}
p {
  margin-top: 10px;
}
span img {
  width: 80px;
  height: 80px;
}
</style>