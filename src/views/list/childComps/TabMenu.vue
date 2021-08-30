<template>
  <scroll id="tab-menu" :pullUpLoad="true">
    <div class="menu">
      <ul
        v-for="(item, index) in childcategories"
        :key="index"
        class="menu-item"
      ></ul>
    </div>
  </scroll>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll.vue";
export default {
  components: { Scroll },
  props: {
    childcategories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>