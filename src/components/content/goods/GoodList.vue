<template>
  <div class="goods">
    <good-list-item
      v-for="(item, id) in goods"
      :goods-item="item"
      :key="id"
    ></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem.vue";
export default {
  components: { GoodListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  padding: 2px;
  justify-content: space-evenly;
}
</style>