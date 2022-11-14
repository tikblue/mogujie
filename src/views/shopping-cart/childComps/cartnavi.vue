<template>
  <div>
    <navi class="navi">
      <template v-slot:center
        ><div class="center">购物车({{ cartlength }})</div></template
      >
    </navi>
  </div>
</template>

<script>
import navi from "components/common/topnavi/topnavi";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartlength", "cartinfo"]),
  },
  components: { navi },
};
</script>

<style scoped>
.navi {
  background-color: rgb(249, 118, 140);
}
.center {
  text-align: center;
  color: white;
}
</style>