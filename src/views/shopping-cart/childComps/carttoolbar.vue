<template>
  <div class="bar">
    <check @click.native="fun(allchecked)" :flag="!allchecked" />
    <span>全选</span>
    <div class="ri">
      <div class="sum">合计 ¥{{ sum }}</div>
      <div class="length">去结算{{ checkedlength }}</div>
    </div>
  </div>
</template>

<script>
import check from "components/content/check/check";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cartlength", "cartinfo"]),

    sum() {
      return this.cartinfo
        .filter((value) => {
          return value.checked == true;
        })
        .reduce((previousValue, currentValue) => {
          return (previousValue += currentValue.price * currentValue.num);
        }, 0)
        .toFixed(2);
    },
    allchecked() {
      return (
        this.cartinfo.length == 0 ||
        this.cartinfo.some((value) => {
          return value.checked == false;
        })
      );
    },
    checkedlength() {
      return this.cartinfo.filter((value) => value.checked == true).length;
    },
  },
  components: {
    check,
  },
  methods: {
    fun(allchecked) {
      this.$store.commit("allcheck", allchecked);
    },
  },
};
</script>

<style scoped>
.bar {
  display: flex;
  height: 49px;
  align-items: center;
  background: rgba(211, 207, 207, 0.781);
}
.ri {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.ri div {
  margin: 0 10px;
}
</style>