<template>
  <div class="c-btn">
    <img src="./g1.png" alt="" class="ccc" :class="{ active: isChecked }" />
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.c-btn {
  height: 23px;
  width: 23px;
  border: 1.3px gray solid;
  border-radius: 50%;
}
.ccc {
  height: 1px;
  width: 1px;
}
.active {
  height: 22px;
  width: 22px;

  border-radius: 50%;
}
</style>