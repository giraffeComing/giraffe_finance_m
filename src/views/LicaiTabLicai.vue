<template>
    <div>
        <div class="route-fade-in"  ref="comBodyLicai">
            <div>
                <!--轮播 调用轮播的时候传入相应的轮播配置和数据-->
                <v-swiper :opts="swiperOpts" :dataVal="imgs"></v-swiper>
                <div class="types">
                    <div class="type01">
                        <div class="type-circle"></div>
                        <div class="type-title">定期理财</div>
                    </div>
                    <div class="type02">
                        <div class="type-circle"></div>
                        <div class="type-title">保险理财</div>
                    </div>
                    <div class="type03">
                        <div class="type-circle"></div>
                        <div class="type-title">新浪自营</div>
                    </div>
                </div>
                <!--要独立拆分组件-->
                <div class="bg-fff">
                    <div class="jj">
                        <div class="jj-title">活期-<span>活期产品</span></div>
                    </div>
                    <ul class="jj-ul">
                        <li class="jj-li" v-for="(item,index) in listData" @click="clickLi(item)">
                            <div class="jj-li-left">
                                <p class="jj-num">{{item.num}}%</p>
                                <p>{{item.numDes}}</p>
                            </div>
                            <div class="jj-li-right">
                                <p class="jj-title">{{item.name}}<span class="tag">灵活配置</span></p>
                                <p class="jj-des">{{item.nameDes}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--要独立拆分组件-->
                <div class="bg-fff">
                    <div class="jj">
                        <div class="jj-title">短期理财-<span>日薪月益，灵活短平快</span></div>
                    </div>
                    <ul class="jj-ul">
                        <li class="jj-li" v-for="(item,index) in listData2" @click="clickLi(item)">
                            <div class="jj-li-left">
                                <p class="jj-num">{{item.num}}%</p>
                                <p>{{item.numDes}}</p>
                            </div>
                            <div class="jj-li-right">
                                <p class="jj-title">{{item.name}}</p>
                                <p class="jj-des">{{item.nameDes}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="z-more">查看更多</div>
                <!--要独立拆分组件-->
                <div class="bg-fff">
                    <div class="jj">
                        <div class="jj-title">热门投资</div>
                    </div>
                    <div class="hot-tags">
                        <div class="tag01"></div>
                        <div class="tag02"></div>
                        <div class="tag03"></div>
                    </div>
                </div>
                <div class="h50"></div>
            </div>
        </div>
    </div>
</template>

<script>
    //    better scroller
    import BScroll from 'better-scroll';
    import VSwiper from '../components/swiper/ComSwiper'
    export default {
        name: '',
        components: {
            VSwiper
        },
        data () {
            return {
                LicaiScroll:'',
                listData:[
                    {
                        "id":"1",
                        "num":"5.3",
                        "numDes":"七日年化",
                        "name":"旺财11",
                        "nameDes":"随时申请转出 保险公司承诺"
                    },
                    {
                        "id":"2",
                        "num":"6.3",
                        "numDes":"七日年化",
                        "name":"旺财22",
                        "nameDes":"随时申请转出 保险公司承诺"
                    },
                    {
                        "id":"3",
                        "num":"7.3",
                        "numDes":"七日年化",
                        "name":"旺财33",
                        "nameDes":"随时申请转出 保险公司承诺"
                    }
                ],
                listData2:[
                    {
                        "id":"1",
                        "num":"8.3",
                        "numDes":"七日年化",
                        "name":"旺财55",
                        "nameDes":"随时申请转出 保险公司承诺"
                    },
                    {
                        "id":"2",
                        "num":"9.3",
                        "numDes":"七日年化",
                        "name":"旺财66",
                        "nameDes":"随时申请转出 保险公司承诺"
                    },
                    {
                        "id":"3",
                        "num":"10.3",
                        "numDes":"七日年化",
                        "name":"旺财77",
                        "nameDes":"随时申请转出 保险公司承诺"
                    }
                ],
                swiperOpts:{
                    pagination: '.swiper-pagination',
//                    nextButton: '.swiper-button-next',
//                    prevButton: '.swiper-button-prev',
                    slidesPerView: 1,
                    speed:800,
                    paginationClickable: true,
                    loop: true,
                    autoplay: 4000,
                },
                imgs:[
                    {
                        "imgSrc":"../../static/imgs/banner01.jpg",
                        "href":"http://www.sina.com.cn/",
                    },
                    {
                        "imgSrc":"../../static/imgs/banner01.jpg",
                        "href":"http://www.sina.com.cn/",
                    },
                    {
                        "imgSrc":"../../static/imgs/banner01.jpg",
                        "href":"http://www.sina.com.cn/",
                    },
                    {
                        "imgSrc":"../../static/imgs/banner01.jpg",
                        "href":"http://www.sina.com.cn/",
                    }
                ],
            }
        },
        created(){
            this.$nextTick(function(){

                this.$refs.comBodyLicai.style.height=this.$parent.$el.firstChild.offsetHeight+'px'
                setTimeout(()=>{
                    this._LicaiScroll()
                },10)


            })

        },
        methods:{
            _LicaiScroll() {
                this.LicaiScroll = new BScroll(this.$refs.comBodyLicai,{
                    click: true,
                    deceleration: 0.003,
                });
            },
            lookMore:function () {
                this.$router.push({
                    path:'/home/jijinlist',
                })
            },
            clickLi:function (i) {

                this.$router.push({
                    path:'/home/licaidetail',
                    query:{LicaiListData:i}
                })
            },
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .types{
        display: flex;
        justify-content: space-between;
        padding: .5rem 1rem .3rem;
        background: #fff;
        margin-top: .3rem;
        .type01,.type02,.type03{
            width: 1.4rem;
            height: 1.4rem;
            font-size: .26rem;
            color: #666;
            .type-circle{
                width: .8rem;
                height: .8rem;
                margin: 0 auto;
                border-radius: .4rem;
            }
        }
        .type01{
            .type-circle{
                background: url("../assets/licaitag01.png") no-repeat;
                background-size: .8rem .8rem;
            }
        }
        .type02{
            .type-circle{
                background: url("../assets/licaitag02.png") no-repeat;
                background-size: .8rem .8rem;
            }
        }
        .type03{
            .type-circle{
                background: url("../assets/licaitag03.png") no-repeat;
                background-size: .8rem .8rem;
            }
        }
        .type-title{
            text-align: center;
            margin-top: .15rem;
        }
    }

    .jj{
        padding: 0 0.2rem;
        height: .66rem;
        line-height: .66rem;
        margin-top: .3rem;
        overflow: hidden;
        border-bottom: 1px solid #eee;

        .jj-title{
            font-size: .28rem;
            color: #333;
            span{
                font-size: .24rem;
                color: #f8b551;
            }
        }

    }
    .jj-ul{
        margin-top: .4rem;
        .jj-li{
            overflow: hidden;
            padding: 0.4rem 0.9rem;
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
                    .tag{
                        display: inline-block;
                        font-size: .24rem;
                        color: #ff8383;
                        background: #ffe8e8;
                        position: relative;
                        top:-.05rem;
                        margin-left: .05rem;
                        padding: .05rem;
                    }
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
    .bg-fff{
        background: #fff;
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
    .h50{
        height: 2rem;
    }
    .hot-tags{
        display: flex;
        justify-content: space-between;
        padding: .3rem .2rem;
        div{
            width: 2.3rem;
            height: .7rem;
        }
        .tag01{
            background: url("../assets/hot01.png") no-repeat;
            background-size: 100% 100%;
        }
        .tag02{
            background: url("../assets/hot02.png") no-repeat;
            background-size: 100% 100%;
        }
        .tag03{
            background: url("../assets/hot03.png") no-repeat;
            background-size: 100% 100%;
        }
    }
</style>
