import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutation";
import actions from "./action"
import getters from "./getters"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        imgvalue: 0,
        cartInfo: []
    },
    mutations,
    actions,
    getters

})

