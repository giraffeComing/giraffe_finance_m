/**
 * Created by zhangwei36 on 2017/7/14.
 * vuex模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
// 引入vuex

export default new Vuex.Store({
    state:{
        count:1000,
    },
    mutations: {
        // 加1
        INCREMENT(state) {
            state.count++;
        },
    },
    actions: {
        increment({commit}){
            commit("INCREMENT")
        },
    }
});

