<template>
  <div id="recom">
    <recomitem v-for="(value, index) in good" :prc="value" :key="index" />
  </div>
</template>

<script>
import recomitem from "./recommend-Item.vue";
export default {
  props: {
    good: {
      type: Array,
      default: [],
    },
  },
  components: { recomitem },
};
</script>

<style scoped>
#recom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>