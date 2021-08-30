<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button
        :is-checked="isSelectAll"
        class="check-btn"
        @click="selectAll"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计￥:{{ totalprice }}</div>
    <div class="calculate" @click="calcClick">去计算:({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton.vue";
export default {
  components: { CheckButton },
  computed: {
    totalprice() {
      return this.$store.state.cartList
        .filter((item) => item.checked)
        .reduce((previousValue, item) => {
          return previousValue + item.count * item.newPrice;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      return !this.$store.state.cartList.find((item) => !item.checked);
      //   return !this.$store.state.cartList.filter((item) => !item.checked).length;
    },
  },
  methods: {
    selectAll() {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.$store.state.cartList.forEach((item) => (item.checked = true));
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  background-color: #dbe5ec;
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
}
.check-btn img {
  height: 18px;
  width: 18px;
  /* margin-bottom: 2px; */
}
.check-btn {
  width: 22px;
  height: 22px;
  margin-right: 10px;
  line-height: 20px;
}
.check-all {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 65px;
  font-size: 15px;
}
.price {
  margin-left: 30px;
  flex: 1;
}
.calculate {
  width: 90px;
  background-color: slategray;
  color: #dbe5ec;
  text-align: center;
}
</style>