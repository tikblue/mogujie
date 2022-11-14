<template>
  <div id="toast" v-show="isshow">
    <div>{{ meassge }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meassge: "",
      isshow: false,
      tim: null,
    };
  },
  methods: {
    show(meassge, time = 1500) {
      this.isshow = true;
      this.meassge = meassge;
      clearTimeout(this.tim);
      this.tim = null;
      this.tim = setTimeout(() => {
        this.isshow = false;
        this.meassge = "";
      }, time);
    },
  },
};
</script>

<style scoped>
#toast {
  width: 160px;
  height: 60px;
  line-height: 60px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  text-align: center;
  background-color: rgba(26, 23, 23, 0.75);
  color: rgb(255, 255, 255);
  z-index: 999;
  transition: all 0.5;
}
</style>