<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="hearder-more">...</div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img
        :src="item"
        v-for="(item, index) in commentInfo.images"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import moment from "moment";
//时间戳插件
export default {
  props: {
    commentInfo: {
      type: Object,
    },
  },
  computed: {
    showDate() {
      let date = new Date(this.commentInfo.created * 1000);
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
  },
};
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid gray;
}
.info-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 40px;
  height: 40px;
}
.header-title {
  float: left;
  font-family: 楷体;
  font-size: 18px;
}
.hearder-more {
  float: right;
  margin-right: 10px;
}

.info-user {
  padding: 10px 0 5px;
}
.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.info-user span {
  position: relative;
  font-size: 17px;
  top: -15px;
  margin-left: 15px;
  font-family: 楷体;
}
.info-detail {
  padding: 0 5px 15px;
}
.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-other .date {
  margin-right: 8px;
}

.info-imgs {
  margin-top: 10px;
}
.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>