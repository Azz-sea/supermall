<template>
  <div class="toast" v-show="show">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  //   data() {
  //     return {
  //       message: "",
  //       isShow: false,
  //     };
  //   },
  //   methods: {
  //     show(message, duration) {
  //       this.isShow = true;
  //       this.message = message;
  //       setTimeout(() => {
  //         this.isShow = false;
  //         this.message = "";
  //       }, duration);
  //     },
  //   },
};
</script>

<style>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 9px 11px;
  border-radius: 15px;
  color: seashell;
  background-color: rgba(0, 0, 0, 0.65);
}
</style>