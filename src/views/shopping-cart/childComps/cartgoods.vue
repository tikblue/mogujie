<template>
  <div>
    <gooditem
      v-for="(value, index) in cartinfo"
      :key="index"
      :single="value"
    ></gooditem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import gooditem from "./cartgooditem.vue";
export default {
  computed: {
    ...mapGetters(["cartlength", "cartinfo"]),
  },
  components: {
    gooditem,
  },
};
</script>

<style scoped>
</style>