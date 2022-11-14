<template>
  <topnavi id="navi"> <template #center>购物街</template></topnavi>
</template>

<script>
import topnavi from "components/common/topnavi/topnavi";
export default {
  components: {
    topnavi,
  },
};
</script>

<style scoped>
#navi {
  text-align: center;
  color: aliceblue;
  background-color: rgb(251, 153, 169);
}
</style>