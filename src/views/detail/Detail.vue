<template>
  <div id="detail">
    <detail-navbar class="detail-navbar"></detail-navbar>
    <scroll
      class="content"
      ref="scroll"
      :pullUpLoad="true"
      :data="[topImages, goods, shop, detailInfo]"
      :probe-type="3"
    >
      <div>
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <dtail-goods-info
          :detail-Info="detailInfo"
          class="goods-info"
        ></dtail-goods-info>
        <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      </div>
    </scroll>
  </div>
</template>

<script>
import DetailNavbar from "./detailNavbar/DetailNavbar.vue";
import { getDetail, Goods, Shop, GoodsParam } from "../../network/detail";
import DetailSwiper from "./detailNavbar/DetailSwiper.vue";
import DetailBaseInfo from "./detailNavbar/DetailBaseInfo.vue";
import DetailShopInfo from "./detailNavbar/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DtailGoodsInfo from "./detailNavbar/DtailGoodsInfo.vue";
import DetailParamInfo from "./detailNavbar/DetailParamInfo.vue";
export default {
  name: "Detail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DtailGoodsInfo,
    DetailParamInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      console.log(res);
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 5;
  background-color: #fff;
}
.detail-navbar {
  position: relative;
  z-index: 1;
  background: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 60px;
}
</style>