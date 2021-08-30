<template>
  <div id="detail">
    <detail-navbar
      class="detail-navbar"
      @titleClick="titleClick"
      ref="nav"
    ></detail-navbar>

    <!-- <li v-for="(item, index) in $store.state.cartList" :key="index">
      {{ item }}
    </li> -->

    <scroll
      @scroll="contentScroll"
      class="content"
      ref="scroll"
      :pullUpLoad="true"
      :data="[
        topImages,
        goods,
        shop,
        detailInfo,
        paramInfo,
        commentInfo,
        recommend,
      ]"
      :probe-type="3"
    >
      <div>
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <dtail-goods-info
          :detail-Info="detailInfo"
          class="goods-info"
          @imageload="imageload"
        ></dtail-goods-info>
        <detail-param-info
          :paramInfo="paramInfo"
          ref="param"
        ></detail-param-info>
        <detail-comment-info
          :commentInfo="commentInfo"
          ref="comment"
        ></detail-comment-info>
        <good-list :goods="recommend" ref="recommend"></good-list>
      </div>
    </scroll>
    <back-top @click="backClick" v-show="isBackTop"></back-top>
    <detail-bottombar @addCart="addToCart"></detail-bottombar>
    <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>
import DetailNavbar from "./detailNavbar/DetailNavbar.vue";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "../../network/detail";
import DetailSwiper from "./detailNavbar/DetailSwiper.vue";
import DetailBaseInfo from "./detailNavbar/DetailBaseInfo.vue";
import DetailShopInfo from "./detailNavbar/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DtailGoodsInfo from "./detailNavbar/DtailGoodsInfo.vue";
import DetailParamInfo from "./detailNavbar/DetailParamInfo.vue";
import DetailCommentInfo from "./detailNavbar/DetailCommentInfo.vue";
import GoodList from "../../components/content/goods/GoodList.vue";

import { debounce } from "../../common/utils";
import DetailBottombar from "./detailNavbar/DetailBottombar.vue";

import { backTopMixin } from "../../common/mixin";
import { mapActions } from "vuex";
import Toast from "@/components/common/toast/Toast.vue";

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
    DetailCommentInfo,
    GoodList,
    DetailBottombar,
    Toast,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTops: [],
      getThemeTopy: null,
      currentIndex: 0,
      message: "",
      show: false,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getRecommend().then((res) => {
      this.recommend = res.data.data.list;
    });
    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      // console.log(res);
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
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    this.getThemeTopy = debounce(() => {
      this.$nextTick(() => {
        this.themeTops = [];
        this.themeTops.push(0),
          this.themeTops.push(this.$refs.param.$el.offsetTop),
          this.themeTops.push(this.$refs.comment.$el.offsetTop),
          this.themeTops.push(this.$refs.recommend.$el.offsetTop);
        this.themeTops.push(Number.MAX_VALUE);
        this.$refs.scorll && this.$refs.scorll.refresh();
        console.log(this.themeTops);
      });
    }, 100);
  },

  methods: {
    ...mapActions(["addCart"]),
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 500);
    },
    imageload() {
      this.$refs.scroll.refresh();
      //图片加载获取offsettop
      this.getThemeTopy();
    },
    contentScroll(position) {
      const positionY = -position.y;
      let length = this.themeTops.length;

      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTops[i] &&
          positionY <= this.themeTops[i + 1]
        ) {
          this.currentIndex = i;

          this.$refs.nav.currentIndex = this.currentIndex;
        }
        // if (
        //   (this.currentIndex !== i &&
        //     i < length - 1 &&
        //     positionY >= this.themeTops[i] &&
        //     positionY <= this.themeTops[i + 1]) ||
        //   (i === length - 1 && positionY >= this.themeTops[i])
        // ) {
        //
        // }
      }
      this.isBackTop = -position.y >= 3000;
    },
    addToCart() {
      const obj = {};
      // 2.对象信息
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.newPrice = this.goods.nowPrice;
      // this.addCart(obj).then((res) => {
      //   this.$toast.show(res, 1000);
      // });
      this.addCart(obj).then((res) => {
        this.show = true;
        this.message = res;
        setTimeout(() => {
          this.show = false;
        }, 2000);
      });
      // this.$store.dispatch("addCart", obj).then((res) => console.log(res));
      // console.log(this.$store.state.cartList);
    },
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