<template>
  <navi id="navi">
    <template v-slot:left>
      <span class="back" @click="back"
        ><img src="~assets/images/common/back.svg" alt=""
      /></span>
    </template>
    <template v-slot:center class="center"
      ><span
        @click="focus(index)"
        :class="{ pink: focusIndex == index }"
        class="control"
        v-for="(value, index) in controlStr"
        :key="index"
        >{{ value }}
      </span></template
    >
  </navi>
</template>

<script>
import navi from "components/common/topnavi/topnavi";
export default {
  data() {
    return {
      focusIndex: 0,
    };
  },
  props: {
    controlStr: { type: Array, default: [] },
    naviIndex: { type: Number, default: 0 },
  },
  components: { navi },
  methods: {
    focus(index) {
      this.focusIndex = index;
      this.$emit("navi", index);
    },
    back() {
      this.$router.back();
    },
  },

  watch: {
    naviIndex(newvalue) {
      this.focusIndex = newvalue;
    },
  },
};
</script>

<style scoped>
.back {
  display: block;
  padding-top: 4px;
  padding-left: 8px;
}
.control {
  margin: 0 5px 0 5px;
}
#navi {
  text-align: center;
}
.pink {
  color: rgb(250, 138, 157);
}
</style>