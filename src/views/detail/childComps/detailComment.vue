<template>
  <div v-if="Object.keys(comment).length != 0" class="aw">
    <div class="duo"><span>用户评价</span> <span>更多</span></div>
    <div class="name">
      <img :src="comment?.user.avatar" alt="" />
      <span>{{ comment?.user.uname }}</span>
    </div>
    <div class="commentInfo">
      {{ comment?.content }}
    </div>
    <div class="commentStyle">
      <span>{{ created }}</span> <span>{{ comment?.style }}</span>
    </div>
    <div class="imgs">
      <img
        :src="value"
        alt=""
        v-for="(value, index) in comment?.images"
        :key="index"
      />
    </div>
  </div>
  <div v-else class="aw">当前暂无评论</div>
</template>

<script>
import tdate from "@/common/utils/turnDate";
export default {
  props: {
    comment: {
      type: Object,
      default: {},
    },
  },
  computed: {
    created() {
      return tdate(this.comment?.created);
    },
  },
};
</script>

<style scoped>
.aw {
  margin-bottom: 40px;
}

.duo {
  height: 50px;
  line-height: 50px;
  border-bottom: 3px solid #ccc;
}

.duo span:last-child {
  float: right;
  margin-right: 3%;
}

.name {
  margin: 10px 5px 0 10px;
  color: rgb(62, 59, 59);
}
.name img {
  border-radius: 50%;
  width: 10%;
  margin-right: 8px;
  vertical-align: middle;
}
.commentInfo {
  margin: 15px 5px 5px 5px;
  font-size: 12px;
  color: rgb(118, 116, 116);
}
.commentStyle {
  font-size: 12px;
  color: rgb(168, 168, 168);
}
.imgs img {
  width: 80px;
  height: 80px;
  margin: 4px;
}
</style>