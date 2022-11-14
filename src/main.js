import Vue from 'vue'
import App from './App.vue'
import router from "./routers/index";
import store from "./store"
import Toast from "./components/common/Toast/index"

Vue.config.productionTip = false

Vue.use(Toast)

Vue.prototype.$bus = new Vue() //事件总线
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')