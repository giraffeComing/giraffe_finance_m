import Vue from 'vue'
import Router from 'vue-router'
import IndexView from "../views/IndexView"
import LicaiView from "../views/LicaiView"
import PersonalView from "../views/PersonalView"
import ErrorView from "../views/ErrorView"

import JDetailView from "../views/JDetailView"
import BaoxianDetailView from "../views/BaoxianDetailView"
import LicaiDetailView from "../views/LicaiDetailView"

import JijinListView from "../views/JijinListView"

import LicaiTabLicai from "../views/LicaiTabLicai"
import LicaiTabJijin from "../views/LicaiTabJijin"
import LicaiTabBaoxian from "../views/LicaiTabBaoxian"

import PersonalTabView from "../views/PersonalTabView"
import PersonalInfoView from "../views/PersonalInfoView"
import PersonalAssets from "../views/PersonalAssets"

import RealNameView from "../views/FlowPage/RealNameView"
import VerCodeView from "../views/FlowPage/VerCodeView"
import SetPassWord from "../views/FlowPage/SetPassWord"


import FundOrderSure from "../views/OrderPage/fundordersure"
import FundPaysure from "../views/OrderPage/fundpaysure"
import FundPaysucc from "../views/OrderPage/fundpaysucc"

import PersonalCards from "../views/PersonalCards"


Vue.use(Router)

// 路由配置
const routes = [
    //路由重定向
    { path: '/', redirect: '/home'},
    {
        path: '/home',
        component: IndexView,
        name: 'VIndex',
    },
    {
        path: '/home/detail',
        component: JDetailView,
        name: 'JDetailView'
    },
    {
        path: '/home/baoxiandetail',
        component: BaoxianDetailView,
        name: 'BaoxianDetailView'
    },
    {
        path: '/home/licaidetail',
        component: LicaiDetailView,
        name: 'LicaiDetailView'
    },
    {
        path: '/home/assets',
        component: PersonalAssets,
        name: 'PersonalAssets'
    },
    {
        path: '/home/jijinlist',
        component: JijinListView,
        name: 'JijinListView'
    },
    {
        path: '/personal',
        component: PersonalView,
        // name: 'PersonalView' ,
        children: [
            { path: '/', redirect: 'information' },
            {
                path: 'zichan',
                component: PersonalTabView,
                name: 'PersonalTabView'
            },
            {
                path: 'information',
                component: PersonalInfoView,
                name: 'PersonalInfoView'
            }
        ]
    },
    {
        path: '/licai',
        component: LicaiView,
        // name: 'LicaiView',
        children: [
            { path: '/', redirect: 'licai' },
            {
                path: 'licai',
                component: LicaiTabLicai,
                name: 'LicaiTabLicai'
            },
            {
                path: 'jijin',
                component: LicaiTabJijin,
                name: 'LicaiTabJijin'
            },
            {
                path: 'baoxian',
                component: LicaiTabBaoxian,
                name: 'LicaiTabBaoxian'
            },
        ]
    },

    //404页面
    { path: '*', component: ErrorView, name: 'Error' },
    //身份认证及银行卡绑定二合一页面的路由
    {
        path: '/flow/realname',
        component: RealNameView,
        name: 'RealNameView'
    },
    {
        path: '/flow/vercode',
        component: VerCodeView,
        name: 'VerCodeView'
    },
    {
        path: '/flow/password',
        component: SetPassWord,
        name: 'SetPassWord'
    },

    {
        path: '/order/ordersure',
        component: FundOrderSure,
        name: 'FundOrderSure'
    },
    {
        path: '/pay/paysure',
        component: FundPaysure,
        name: 'FundPaysure'
    },
    {
        path: '/pay/paysucces',
        component: FundPaysucc,
        name: 'FundPaysucc'
    },
    {
        path: '/cards',
        component: PersonalCards,
        name: 'PersonalCards'
    },


]

//初始化路由
export default new Router({
    routes
})