<template>
  <div v-if="Object.keys(parems).length != 0">
    <table class="size">
      <tr v-for="(td, index) in parems?.size[0]" :key="index">
        <td v-for="(value, index) in td" :key="index">{{ value }}</td>
      </tr>
    </table>
    <table class="style">
      <tr v-for="(td, index) in parems?.style" :key="index">
        <td>{{ td.key }}</td>
        <td>{{ td.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    parems: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
.size,
.style {
  width: 100%;
  padding: 8px 0;
  border-bottom: solid 3px #ccc;
  color: rgb(104, 102, 102);
}
.size tr,
.style td {
  height: 30px;
  line-height: 30px;
}
.size td {
  padding-left: 5px;
}
.size td:nth-child(1) {
  width: 74.66px;
}

.style td:nth-child(1) {
  width: 74.66px;
  white-space: nowrap;
}
.style td:nth-child(2) {
  color: rgb(245, 121, 142);
}
table td {
  border-bottom: 1px solid rgb(244, 240, 240);
}
</style>