<template>
  <div class="tabbur-item" @click="active">
    <div v-if="flag"><slot name="img1"></slot></div>
    <div v-else><slot name="img2"></slot></div>
    <div :style="flag ? { color } : {}"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    color: { type: String, default: "red" },
  },
  methods: {
    active() {
      this.$router.replace(this.path).catch((err) => {});
    },
  },
  computed: {
    flag() {
      return this.$route.path.includes(this.path);
    },
  },
};
</script>

<style>
.tabbur-item {
  flex: 1;
}
.tabbur-item img {
  width: 100%;
  height: 20px;
}
</style>