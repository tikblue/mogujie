import debounce from "@/common/utils/debounce";

export default {
    computed: {
        ad() {
            return this.$store.state.imgvalue;
        },
    },
    mounted() {
        this.derefresh = debounce(this.$refs.scroll.scrollrefresh);
    },
    watch: {
        ad: {
            //这个地方挂载后绑定函数、图片加载比这个生命周期慢。
            handler: function (newvalue, oldvalue) {
                this.derefresh()
            },
        },
    }
}