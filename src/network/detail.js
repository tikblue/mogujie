import { re } from "./require";

function getdata(iid) {
    return re({
        url: '/api/hy66/detail',
        params: { iid }
    })
}

function getrecommend() {
    return re({ url: '/api/hy66/recommend' })
}



//这里的信息比较复杂，分布在不同的对象，我们希望整合在一个对象中。
class DetailShopInfo {
    constructor(commodity, columns, postinfo) {
        this.commodity = commodity
        this.columns = columns
        this.postinfo = postinfo
    }
}
class DetaParamsInfo {
    constructor(style, size) {
        this.style = style
        this.size = size
    }
}
export { getdata, getrecommend, DetailShopInfo, DetaParamsInfo }