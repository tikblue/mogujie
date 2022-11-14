<template>
  <recommed v-if="recommends.length != 0" :good="recommends" />
</template>

<script>
import recommed from "components/content/recommend/recommend";

export default {
  props: {
    recommends: {
      type: Array,
      default: [],
    },
  },
  components: {
    recommed,
  },
};
</script>

<style>
</style>