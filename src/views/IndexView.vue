<template>
    <div class="page-view">
        <div class="com-body" ref="comBody">
            <!--better-scroller的ref要直接跟着一个div结构-->
            <div>
                <div class="indexbg">
                    <div class="index-head">
                        <div class="head-pic">
                            <a href="http://172.16.59.143:8089/apife/ssoLogin?path=sina_finance/index.html">
                                <img src="../assets/index_head_bg.png" alt="">
                            </a>
                        </div>
                        <!--<div class="head-email"></div>-->
                    </div>
                    <!--资产后期要单独拆分出来组件-->
                    <div class="zc">
                        <p class="zc-title">总资产<span class="eye"></span></p>
                        <p class="zc-num">{{userCount.total|money}}</p>
                        <p>昨日收益 {{userCount.incomeLastDay|money}} 元</p>
                    </div>
                </div>
                <!--各种账户资产要单独拆分组件-->
                <div class="counts">
                    <a href="https://trade.xincai.com/wap/wallet">
                        <div class="count-block count01">
                            <div class="count-head"></div>
                            <div class="count-border">私房宝<span>转入</span></div>
                        </div>
                    </a>
                    <div class="count-block count02">
                        <div class="count-head"></div>
                        <div class="count-border">基金账户<span>0.00</span></div>
                    </div>
                    <a href="http://jr.sina.cn/fixHome">
                        <div class="count-block count03">
                            <div class="count-head"></div>
                            <div class="count-border">理财账户<span>0.00</span></div>
                        </div>
                    </a>
                </div>

                <div class="index-tags">
                    <div class="tags-row">
                        <div class="tag01"><a href="http://weidai.sina.com/h5/">借钱</a></div>
                        <div class="tag02">专属经纪人</div>
                        <div class="tag03">小浪黑卡</div>
                        <div class="tag04">小浪智投</div>
                    </div>
                    <div class="tags-row">
                        <div class="tag05">消费分期</div>
                        <div class="tag06">活动福利</div>
                        <div class="tag07">更多</div>
                        <div></div>
                    </div>
                </div>


                <div class="bg-fff">
                    <div class="jj">
                        <div class="jj-left">经纪人今日推新</div>
                        <div class="jj-right">近期操作推荐组合</div>
                    </div>
                    <ul class="jj-ul">
                        <li class="jj-li" v-for="(item,index) in listData" @click="clickLi(item)">
                            <div class="jj-li-left">
                                <p class="jj-num">{{item.year_incratio}}</p>
                                <p>近一年收益率</p>
                            </div>
                            <div class="jj-li-right">
                                <p class="jj-title">{{item.fund_name}}</p>
                                <p class="jj-des">{{item.tuijian}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="z-more" @click="lookMore">查看更多</div>
                <div class="footerbg"></div>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
//    better scroller
    import BScroll from 'better-scroll';
//    页脚组件
    import VFooter from '../components/layout/FooterLayout';
    export default {
        name: '',
//        组件注册
        components: {
            VFooter,
        },
        data () {
            return {

                listData:[],
                queryId:'',
                comBodyScroll:'',
//                总资产和昨日收益
                userCount:'',
            }
        },
        //定义金钱类型过滤器
        filters:{
            money:function (value) {
                return Number(value).toFixed(2);
            },
        },

        created(){

//            获取总资产和昨日收益
            this.axios.get(API_ROOT+'/apife/getUserAccount').then(
                (response)=>{
                    if(response.data.code==0){
                        this.userCount=response.data.data
                    }else{
                        this.userCount={"total":0,"incomeLastDay":0}
                    }
                }
            ).catch((error) => {
                console.log('error')
            });
//            获取基金列表的接口
            this.axios.get(API_ROOT+'/api/productfund/index?type=A')
                .then((response) => {
                    this.listData=response.data.data;
                    //$nextTick这个方法保证了dom结构加载完成之后再执行
                    this.$nextTick(() => {
                        //结构复杂的地方再加个延迟
                        setTimeout(()=>{
                            this.indexScroll();
                        },300)
                    })
                })
                .catch((error) => {
                    console.log('error')
                });

            this.setCookie('sid','5f1975afc3ed6ad260b4cb6e48e3e4a2',3)
        },
        methods:{
            setCookie:function (cname, cvalue, exdays) {
                let d = new Date();
                d.setTime(d.getTime() + (exdays*24*60*60*1000));
                let expires = "expires="+d.toUTCString();
                document.cookie = cname + "=" + cvalue + "; " + expires;
            },
//            首页列表点击之后将列表数据带到详情页中
            clickLi:function (i) {
                this.$router.push({
                    path:'/home/detail',
                    query:{goodId:i.fund_code}
                })
            },
            indexScroll() {
                this.comBodyScroll = new BScroll(this.$refs.comBody,{
                    click: true,
                    deceleration: 0.003,
                });
            },
            lookMore:function () {
                this.$router.push({
                    path:'/licai/jijin',
                })
            }
        }



    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        height: 100%;
        display: flex;
        flex-direction: column;
        .com-body{
            flex: 1;
            overflow-y: auto;
            .jj{
                padding: 0 0.2rem;
                height: .66rem;
                line-height: .66rem;
                margin-top: .3rem;
                overflow: hidden;
                border-bottom: 1px solid #eee;
                .jj-left{
                    float: left;
                    color: #333;
                    font-size: 0.3rem;
                }
                .jj-right{
                    float: right;
                    text-align: right;
                    font-size: .24rem;
                    color: #999;
                }
            }
            .jj-ul{
                margin-top: .4rem;
                /*padding-bottom: .1rem;*/
                .jj-li{
                    overflow: hidden;
                    padding: 0.4rem 0.9rem;
                    /*margin-bottom: 0.8rem;*/
                    font-size: .26rem;
                    color: #666;
                    border-bottom: 1px dashed #eee;
                    .jj-li-left{
                        float: left;
                        border-right: 1px solid #eee;
                        padding-right: .5rem;
                        .jj-num{
                            color: #f44e51;
                            font-size: 0.6rem;
                            height: 0.8rem;
                        }
                    }
                    .jj-li-right{
                        .jj-title{
                            color: #333;
                            font-size: 0.4rem;
                            height: 0.8rem;
                            padding-top: .1rem;
                            width: 2.7rem;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        .jj-des{
                            width: 2.7rem;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        padding-left: .5rem;
                        float: right;
                    }
                }
            }
        }
        .zc{
            text-align: center;
            font-size: .26rem;
            color: #666;
            .zc-num{
                color: #f44e51;
                font-size: 0.8rem;
            }
            .zc-title{
                height: .4rem;
                /*line-height: .35rem;*/
                position: relative;
            }
            .eye{
                position: absolute;
                display: inline-block;
                width: .28rem;
                height: .2rem;
                top:.1rem;
                margin-left: .1rem;
                /*background: url("../assets/eye.png") no-repeat;*/
                background-size: .28rem .2rem;
                background-position: center center;
            }
        }
        .counts{
            display: flex;
            justify-content: space-between;
            padding: 0 .2rem;
            /*background: #fff;*/
            color: #666;
            a{
                text-decoration: none;
                color: #666;
            }
            .count-block{
                width: 2.3rem;
                height: 1.2rem;
                overflow: hidden;
                background: #fff;
                border-radius: 0.1rem;
                .count-head{
                    height: .3rem;
                }
                .count-border{
                    height: .26rem;
                    line-height: .26rem;
                    margin: .3rem 0 0 .1rem;
                    padding-left: .1rem;
                    font-size: .26rem;
                    span{
                        margin-left: .2rem;
                    }
                }
            }
            .count01{
                .count-head{
                    background: url("../assets/countbg01.png") no-repeat;
                    background-size: 100% 100%;
                }
                .count-border{
                    border-left: .08rem solid #f8b551;
                    span{
                        color: #5781bd;
                    }
                }
            }
            .count02{
                .count-head{
                    background: url("../assets/countbg02.png") no-repeat;
                    background-size: 100% 100%;
                }
                .count-border{
                    border-left: .08rem solid #d2c19b;
                    span{
                        color: #f14d4c;
                    }
                }
            }
            .count03{
                .count-head{
                    background: url("../assets/countbg03.png") no-repeat;
                    background-size: 100% 100%;
                }
                .count-border{
                    border-left: .08rem solid #cbcbcb;
                    span{
                        color: #f14d4c;
                    }
                }
            }
        }
        .z-more{
            height: .8rem;
            line-height: .8rem;
            margin-top: -1px;
            color: #5087c0;
            text-align: center;
            font-size: .28rem;
            background: url("../assets/morebg.jpg") no-repeat;
            background-size: 100% 100%;
            border-top:1px solid #eee;
            border-bottom: 1px solid #eee;
        }
        .footerbg{
            height: 1.52rem;
            background: url("../assets/idxfooterbg.png") no-repeat;
            background-size: 100% 100%;
        }
        .z-more-bottom{
            padding-bottom: 1.4rem;
        }

        .indexbg{
            height: 3.5rem;
            background: url("../assets/indexbgnew.jpg") no-repeat;
            background-size: 100% 3.5rem;
        }

        .index-head{
            overflow: hidden;
            padding: .3rem .2rem;
            .head-pic{
                float: left;
                width: .54rem;
                height: .54rem;
                border-radius: .28rem;
                overflow: hidden;
            }
            .head-email{
                float: right;
                width: .42rem;
                height: .3rem;
                background: url("../assets/emailbg.png") no-repeat;
                background-size: .42rem .3rem;
            }
        }
        .bg-fff{
            background: #fff;
        }
        .index-tags{
            background: #fff;
            height: 3.44rem;
            margin-top: .2rem;
            overflow: hidden;
            padding-top: .3rem;
            font-size: .26rem;
            color: #666;
            text-align: center;
            .tags-row{
                display: flex;
                justify-content: space-between;
                padding: 0 .4rem;
                margin-bottom: .1rem;
                a{
                    text-decoration: none;
                    color: #666;
                    display: block;
                    height: 1.4rem;
                }
                div{
                    width: 1.4rem;
                    height: 1.4rem;
                    overflow: hidden;
                    line-height: 2.2rem;
                }
                .tag01{
                    background: url("../assets/itag01.png") no-repeat;
                    background-size: .63rem .55rem;
                    background-position: .45rem .3rem;
                }
                .tag02{
                    background: url("../assets/itag02.png") no-repeat;
                    background-size: .49rem .55rem;
                    background-position: center .3rem;
                }
                .tag03{
                    background: url("../assets/itag03.png") no-repeat;
                    background-size: .62rem .44rem;
                    background-position: center .3rem;
                }
                .tag04{
                    background: url("../assets/itag04.png") no-repeat;
                    background-size: .52rem .52rem;
                    background-position: center .3rem;
                }
                .tag05{
                    background: url("../assets/itag05.png") no-repeat;
                    background-size: .58rem .54rem;
                    background-position: center .3rem;
                }
                .tag06{
                    background: url("../assets/itag06.png") no-repeat;
                    background-size: .57rem .57rem;
                    background-position: center .3rem;
                }
                .tag07{
                    background: url("../assets/itag07.png") no-repeat;
                    background-size: .62rem .2rem;
                    background-position: center .5rem;
                }
            }
        }


    }
</style>
