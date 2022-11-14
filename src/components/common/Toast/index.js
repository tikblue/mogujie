import Toast from "components/common/Toast/Toast";
const obj = {}
obj.install = function (Vue) {
    // 1这里我们想要插件一旦安装，即可在组件挂载到dom上
    // 2document.body.append(Toast) 这样写没有作用 期望我们引入一个元素对象 加上.$el为未定义 这个属性需在元素挂载时才有
    /* 3我们也不能直接引用这个组件 调用mount 因为这是一些组件选项【老师说是render函数，并不是 打包器把组件模板变成render函数放在了这个选项对象中】
        必须把它变为vue的实例才能调用api，平时为什么可以不new，因为compoents 会自动调用 Vue.extend  new 创建组件 为什么不mount 因为父 做了
     */
    let Toaset = Vue.extend(Toast)  //创建组件构造器
    let toaset = new Toaset()  //创建实例
    toaset.$mount(document.createElement('div'))
    document.body.append(toaset.$el)
    Vue.prototype.$toast = toaset
}


export default obj