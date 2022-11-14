import Router from "vue-router";
import vue from "vue";
const home = () => import("views/home/home.vue");
const sort = () => import("views/sort/sort.vue");
const shoppingCart = () => import("views/shopping-cart/shoppingcart.vue");
const profile = () => import("views/profile/profile.vue");
const detail = () => import("views/detail/detail.vue")
vue.use(Router)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/sort',
        component: sort
    },
    {
        path: '/shoppingcart',
        component: shoppingCart
    },
    {
        path: '/profile',
        component: profile
    },
    {
        path: '/detail/:iid',
        component: detail
    }
]

export default new Router({
    routes,
    mode: "history"
});
