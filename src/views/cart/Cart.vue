<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>👴—购物车({{ cartLength }})</div>
      </template>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar class="bottom"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import CartList from "./childCompos/cartList.vue";
import CartBottomBar from "./childCompos/cartBottomBar.vue";

export default {
  components: { NavBar, CartList, CartBottomBar },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.cart {
  width: 100%;
}
.bottom {
  height: 40px;
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>