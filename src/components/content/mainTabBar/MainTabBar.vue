<template>
  <tab-bar>
    <div></div>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/home.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/home1.png" alt="" />
      </template>
      <template v-slot:item-text> <div>首页</div></template>
    </tab-bar-item>

    <tab-bar-item path="/list">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/list.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/list1.png" alt="" />
      </template>
      <template v-slot:item-text> <div>分类</div></template>
    </tab-bar-item>

    <tab-bar-item path="/cart">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/cart.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/cart1.png" alt="" />
      </template>
      <template v-slot:item-text> <div>购物车</div></template>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/user.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/user1.png" alt="" />
      </template>
      <template v-slot:item-text> <div>我的</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tab-bar/TabBar";
import TabBarItem from "../../common/tab-bar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>