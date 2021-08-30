import BackTop from "../components/content/backTop/BackTop.vue";
export const backTopMixin = {
    components: {
        BackTop
    },
    data:function () {
        return {
            isBackTop: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0);
          },
    }
}