<template>
  <div id="goods" v-if="Object.keys(goodes).length != 0">
    <div class="info">
      {{ goodes?.desc }}
    </div>
    <div v-for="(value, index) in goodes?.detailImage" :key="index">
      <span>{{ value.key }}</span>
      <div v-for="(value, index) in value.list" :key="index" class="shi">
        <img :src="value" alt="" @load="deb" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import debounce from "@/common/utils/debounce";

export default {
  props: {
    goodes: {
      type: Object,
      default: {},
    },
  },
  data() {
    return { deb: null };
  },
  created() {
    this.deb = debounce(this.imgload);
  },

  methods: {
    imgload() {
      this.$emit("imgload");
    },
  },
};
</script>

<style scoped>
.info {
  position: relative;
  font-size: 15px;
  padding: 30px 10px;
  margin-top: 10px;
}
.info::after {
  content: "■";
  position: absolute;
  right: 10px;
  bottom: 0;
  width: 100px;
  border-bottom: solid 3px #ccc;
  text-align: right;
}
.info::before {
  content: "■";
  position: absolute;
  left: 10px;
  top: 0;
  width: 100px;
  border-bottom: solid 3px #ccc;
}
.shi img {
  width: 100%;
}
#goods {
  border-bottom: 3px solid #ccc;
}
</style>