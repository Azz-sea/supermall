<template>
  <div class="list">
    <nav-bar class="nav">
      <template v-slot:center>商品分类</template>
    </nav-bar>
    <div class="content">
      <tab-menu :childcategories="categories"></tab-menu>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { getCategory } from "../../network/list";
import TabMenu from "./childComps/TabMenu.vue";
export default {
  components: { NavBar, TabMenu },
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this._getCategory();
  },

  methods: {
    _getCategory() {
      getCategory().then((res) => {
        this.categories = res.data.data.category.list;
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
          this._getSubcategories(0);
        }
      });
    },
  },
};
</script>

<style scoped>
</style>