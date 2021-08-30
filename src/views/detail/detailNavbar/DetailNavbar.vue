<template>
  <nav-bar>
    <template v-slot:left>
      <div class="left" @click="backClick">
        <img src="./left.png" alt="" />
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
    <template v-slot:right>
      <div class="right"></div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.left {
  width: 60px;
}
.left img {
  height: 28px;

  vertical-align: middle;
}
.right {
  width: 60px;
}
</style>