<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table
      v-for="(table, index) in paramInfo.sizes"
      :key="index"
      class="info-size"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, inded) in tr" :key="inded">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
    },
  },
};
</script>

<style>
.param-info {
  padding: 20px;
  font-size: 14px;
  border-bottom: 5px gray solid;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr {
  height: 42px;
}
.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 90px;
}
.param-value {
  color: indianred;
}
.info-param {
  border-top: 1px solid rgba(255, 0, 0, 0.1);
}
</style>