// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// ./store里面是vuex的store模块
import store from './store'
// 这个store引的是本地存储的store
import localStore from 'store'
//引入axios
import axios from 'axios'
//这种形式axios是挂载在Vue的原型下面了，使用的时候前面要加this

Vue.prototype.axios = axios;

Vue.config.productionTip = false;
//vue原型下加入本地存储
Vue.prototype.$localStore=localStore;

//保险模块，子组件内完成axios通信之后emit一个自定义事件，然后在保险tab这个父组件中on监听到该事件，再进行滚动处理
window.bus = new Vue();

// API全局变量
window.API_ROOT = 'http://172.16.59.143:8089';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
