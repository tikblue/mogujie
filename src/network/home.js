import { re } from "./require.js";


function getHomeMultiData() {

    return re({ url: `/api/hy66/home/multidata` })
}

function getgoods(type, page) {
    return re({ url: `/api/hy66/home/data`, params: { type: type, page: page } })
}


export { getHomeMultiData, getgoods }