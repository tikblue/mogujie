import backtop from "@/components/content/backTop/backtop"

export default {
    data() {
        return {
            showflag: false
        }
    },
    components: {
        backtop
    },
    methods: {
        top() {
            this.$refs.scroll.scrollTo(0, 0);
        },
        lisenshow(position) {
            this.showflag = -position.y > 1000;
        },
    }
}