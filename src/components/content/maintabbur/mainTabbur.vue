<template>
  <tabbur
    ><tabburitem path="home" color="blue">
      <template v-slot:img1
        ><img src="~assets/images/tabbur/主页.svg" alt="" />
      </template>
      <template v-slot:img2
        ><img src="~assets/images/tabbur/主页d.svg" alt="" />
      </template>
      <template v-slot:text><div>主页</div></template>
    </tabburitem>
    <tabburitem path="sort">
      <template #img1
        ><img src="~assets/images/tabbur/分类.svg" alt="" />
      </template>
      <template #img2
        ><img src="~assets/images/tabbur/分类d.svg" alt="" />
      </template>
      <template #text><div>分类</div></template>
    </tabburitem>
    <tabburitem path="shoppingcart">
      <template #img1
        ><img src="~assets/images/tabbur/购物车.svg" alt="" />
      </template>
      <template #img2
        ><img src="~assets/images/tabbur/购物车d.svg" alt="" />
      </template>
      <template #text> <div>购物车</div></template>
    </tabburitem>
    <tabburitem path="profile">
      <template #img1
        ><img src="~assets/images/tabbur/我的.svg" alt="" />
      </template>
      <template #img2
        ><img src="~assets/images/tabbur/我的d.svg" alt="" />
      </template>
      <template #text> <div>我的</div></template>
    </tabburitem></tabbur
  >
</template>

<script>
import tabbur from "components/common/tabbur/tabbur.vue";
import tabburitem from "components/common/tabbur/tabbur-item.vue";
export default {
  components: {
    tabbur,
    tabburitem,
  },
};
</script>

<style>
</style>