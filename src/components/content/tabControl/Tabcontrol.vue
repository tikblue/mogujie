<template>
  <div id="control">
    <div
      v-for="(item, index) in arr"
      :key="index"
      class="control-item"
      @click="check(index)"
      :class="{ check: pck == index }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pck: 0,
    };
  },
  props: {
    arr: { type: Array, default: [] },
  },
  methods: {
    check(index) {
      this.pck = index;
      this.$emit("qiehuan", index);
    },
  },
};
</script>

<style scoped>
#control {
  width: 100%;
  text-align: center;
  display: flex;
  position: sticky;
  top: 39px;
  height: 40px;
  line-height: 40px;
  background-color: white;
}

.check span {
  color: rgb(251, 173, 186);
  border-bottom: 4px rgb(254, 178, 191) solid;
}
.control-item {
  flex: 1;
}
.control-item span {
  padding: 5px;
}
</style>