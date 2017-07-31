<template>
    <div class="page-wrap">
        <transition appear mode="out-in">
            <div class="page-view">
                <div class="com-body" ref="comBody">
                    <div>
                        <v-header-back :opts="jjData"></v-header-back>
                        <v-topic :fundData="topicData"></v-topic>
                        <v-market :marketOption="marketOption"></v-market>
                        <v-moduleTab :tabData="tabData"></v-moduleTab>
                        <v-moduleList :listData="listData"></v-moduleList>
                        <v-footer :btnGroup="btnGroup" @purchase="setLocalStore"></v-footer>
                        <div class="h20"></div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    //    better scroller
    import BScroll from 'better-scroll';
    //    页脚组件
    //    import VFooter from '../components/layout/FooterLayout';

    import VHeaderBack from '../components/layout/HeaderBack'

    import VMarket from '../components/JiDetail/Market'
    import VTopic from '../components/JiDetail/topic'
    import VModuleTab from '../components/JiDetail/moduleTab'
    import VModuleList from '../components/JiDetail/moduleList'
    import VFooter from '../components/JiDetail/footer'

    export default {
        name: '',
//        组件注册
        components: {
            VMarket,
            VTopic,
            VModuleTab,
            VModuleList,
            VFooter,
            VHeaderBack
        },
        data () {
            return {
                jjData:{
                    name:"",
//                    tag:"问经纪人",
                    extra:""
                },
                jDetailScroll:'',
                //获取理财产品列表ID
                currentData: this.$route.query.goodId,

                topicData:{
                    worth:"1.4620",
                    gains:"1.1620",
                    fundType:"债券型"
                },
                marketOption:{
                    symbol:""
                },
                tabData:{
                    data:[
                        {
                            name:"经纪人建议",
                            value:50,           //总分值
                            bgColor:"#ddd",     //底圈颜色
                            arcColor:"#f8b551", //顶圈及lab颜色
                            txtColor:"#ccc",    //刻度颜色
                            isAnimate: true,    //是否开启动画 默认开启
                            openScale:true,    //是否开启刻度显示 默认显示
                            openLab:true,      //是否开启lab显示 默认显示
                            lab:[
                                {
                                    name:"负能量",
                                    grade:10
                                },
                                {
                                    name:"中性",
                                    grade:20
                                },
                                {
                                    name:"正能量",
                                    grade:20
                                }
                            ]
                        },
                        {
                            name:"产品行业热度",
                            value:70,           //总分值
                            bgColor:"#ddd",     //底圈颜色
                            arcColor:"#f8b551", //顶圈及lab颜色
                            txtColor:"#ccc",    //刻度颜色
                            isAnimate: true,    //是否开启动画 默认开启
                            openScale:true,    //是否开启刻度显示 默认显示
                            openLab:true,      //是否开启lab显示 默认显示
                            lab:[
                                {
                                    name:"负能量",
                                    grade:30
                                },
                                {
                                    name:"中性",
                                    grade:30
                                },
                                {
                                    name:"正能量",
                                    grade:20
                                }
                            ]
                        },
                        {
                            name:"微博舆情参考",
                            value:90,           //总分值
                            bgColor:"#ddd",     //底圈颜色
                            arcColor:"#f8b551", //顶圈及lab颜色
                            txtColor:"#ccc",    //刻度颜色
                            isAnimate: true,    //是否开启动画 默认开启
                            openScale:true,    //是否开启刻度显示 默认显示
                            openLab:true,      //是否开启lab显示 默认显示
                            lab:[
                                {
                                    name:"负能量",
                                    grade:40
                                },
                                {
                                    name:"中性",
                                    grade:20
                                },
                                {
                                    name:"正能量",
                                    grade:40
                                }
                            ]
                        }
                    ]
                },
                listData:[
                    {
                        name:"基金概况",
                        url:""
                    },
                    {
                        name:"业绩表现",
                        url:""
                    },
                    {
                        name:"交易费率",
                        url:""
                    }
                ],
                btnGroup:[
                    {
                        name:"关注",
                        style:"btn-gray"
                    },
                    {
                        name:"定投",
                        style:"btn-orange"
                    },
                    {
                        name:"购买",
                        style:"btn-red"
                    },
                ]
            }
        },
        created:function(){

            this.fetchData();
//            调用滑动组件
            this.$nextTick(() => {
                //结构复杂的地方再加个延迟
                setTimeout(()=>{
                    this._jDetailScroll()
                },300)
            })
        },
        methods:{

            _jDetailScroll() {
                this.jDetailScroll = new BScroll(this.$refs.comBody,{
                    click: true,
                    deceleration: 0.005,
                });
            },
            setLocalStore(){
                //在本地存储中set用户选中的商品信息
                this.$localStore.set('goodsInfor',this.$route.query.goodId);
            },
            fetchData(){

                this.marketOption.symbol = this.$route.query.goodId;

                this.axios.get(API_ROOT+'/apife/getfundProductDetail', {
                    params: {id: this.currentData}
                }).then(
                    (response)=>{

                        this.jjData.name=response.data.data[0].fund_name;
                        this.jjData.extra=response.data.data[0].fund_code;
                    }
                ).catch((error) => {
                    console.log('error')
                });

//                console.log(this.currentData)
                //拿到列表带过来的数据
//                图表数据
//                this.marketOption.symbol=this.currentData.fund_code;
////                基金名字，如果是在当期页刷新则定位到默认基金
//                this.jjData.name=this.currentData.fund_name||'默认推荐基金名字待定';
////                基金编码
//                this.jjData.extra=this.currentData.fund_code||'0000001';

            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-wrap{
        height: 100%;
    }
    .page-view{
        height: 100%;
        display: flex;
        flex-direction: column;
        .com-body{
            flex: 1;
            overflow-y: auto;
        }
    }
    .h20{
        height: .2rem;
    }
</style>
