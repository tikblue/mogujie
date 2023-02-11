<template>
  <div>
    <keep-alive exclude="detaill"> <router-view></router-view></keep-alive>
    <maintabbur />
  </div>
</template>

<script>
import maintabbur from "components/content/maintabbur/mainTabbur";

export default {
  components: {
    maintabbur,
  },
};
</script>

<style >
@import "assets/css/base.css";
.red {
  color: red;
}
</style>