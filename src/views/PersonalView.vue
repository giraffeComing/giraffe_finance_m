<template>
    <div class="page-view">
        <v-header-back :opts="HeadData"></v-header-back>
        <div class="com-body" ref="comBodyPersonal">
            <div>
                <div class="blk profile">
                    <div class="avatar">
                        <img src="http://tva4.sinaimg.cn/crop.0.0.1080.1080.50/9413f43bjw8eqq484kxdtj20u00u03zp.jpg" />
                    </div>
                    <div class="username">13699214888</div>
                    <!--<div class="sub">-->
                        <!--<span>个人信息</span>-->
                        <!--<i class="icon arrow"></i>-->
                    <!--</div>-->
                </div>
                <div class="blk nav mg-30">
	<span class="bank-card" @click="toCardsList">
		<i class="icon">银行卡</i>
	</span>
                    <span class="recharge">
		<i class="icon">充值</i>
	</span>
                    <span class="withdraw">
		<i class="icon">提现</i>
	</span>
                    <span class="red-packet">
		<i class="icon">红包</i>
	</span>
                </div>
                <div class="blk list" @click="toMyAssets">
                    <div class="title">
                        <i class="icon">总</i>
                        总资产 <span class="red">0.00</span>
                    </div>
                    <div class="sub">
                        <span>帐户总览</span>
                        <i class="icon arrow"></i>
                    </div>
                </div>
                <div class="blk list">
                    <div class="title">
                        <i class="icon">理</i>
                        理财帐户
                    </div>
                    <div class="sub">
                        <span>灵活、安全</span>
                        <i class="icon arrow"></i>
                    </div>
                </div>
                <div class="blk list">
                    <div class="title">
                        <i class="icon">保</i>
                        保险帐户
                    </div>
                    <div class="sub">
                        <span></span>
                        <i class="icon arrow"></i>
                    </div>
                </div>
                <div class="blk list">
                    <a href="https://trade.xincai.com/wap/wallet">
                        <div class="title">
                            <i class="icon">消</i>
                            私房宝 <span>0.00</span>
                        </div>
                    </a>
                    <div class="sub">
                        <span></span>
                        <i class="icon arrow"></i>
                    </div>
                </div>
                <div class="blk list">
                    <div class="title">
                        <i class="icon">分</i>
                        分期帐户
                    </div>
                    <div class="sub">
                        <span>本周应还 0.00</span>
                        <i class="icon arrow"></i>
                    </div>
                </div>
                <a href="http://weidai.sina.com/h5/">
                    <div class="blk loan mg-30">
                        <div class="title">
                            <i class="icon">贷</i>
                            借钱
                        </div>
                        <div class="sub">
                            <span></span>
                            <i class="icon arrow"></i>
                        </div>
                        <div class="text">
                            <div class="txt-1"><span class="orange">720</span>分<br /></div>
                            <div class="txt-2">小浪信用分达到600分就能借钱，5分钟在线放款</div>
                        </div>
                    </div>
                </a>
                <div class="blk credit">
                    <div class="title">
                        <i class="icon">信</i>
                        小浪信用分
                    </div>
                    <div class="sub">
                        <span></span>
                        <i class="icon arrow"></i>
                    </div>
                    <div class="chart">
                        <canvas class="credit-chart" ref="creditCanvas"></canvas>
                        <div class="point"><span class="orange">720</span>分</div>
                    </div>
                </div>

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
    //    页头组件
    import VHeaderBack from '../components/layout/HeaderBack.vue';
    export default {
        name: '',
//        组件注册
        components: {
            VFooter,
            VHeaderBack,
        },

        data () {
            return {
                meunScroll:'',
                HeadData:{
                    name:"我的",
//                    tag:"问问经纪人",
                }
            }
        },
        created(){
            this.$nextTick(() => {
                //结构复杂的地方再加个延迟
                setTimeout(()=>{
                    this._initScroll();
                },300)
            })
        },
        mounted(){

            this.initCanvas();
        },

        methods: {
            _initScroll() {
                this.meunScroll = new BScroll(this.$refs.comBodyPersonal,{click: true,deceleration: 0.003});
            },
            toMyAssets(){
                this.$router.push({
                    path:'/home/assets',
                })
            },
            toCardsList(){
                this.$router.push({
                    path:'/cards',
                })
            },
            initCanvas(){
//                var c = document.getElementById('credit-chart');
                var c=this.$refs.creditCanvas;
                c.width = 1000;
                c.height = 1000;
                var ctx = c.getContext('2d');
                ctx.lineWidth = 50;
                ctx.lineCap="round";
                ctx.beginPath();
                ctx.arc(500,500,350,Math.PI*3/4,Math.PI*1/4,false);
                ctx.strokeStyle = '#ddd';
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(500,500,350,Math.PI*3/4,Math.PI*1/16,false);
                ctx.strokeStyle = '#f8b551';
                ctx.stroke();
            }
        },

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
            li{
                padding: 0 10px;
                border-bottom: 1px solid #ccc;
            }
        }
    }

    a{text-decoration:none;}
    .icon{display:inline-block;font-style:normal;}
    .icon.arrow{width:0.18rem;height:0.18rem;border-top:1px solid #b3b3b3;border-right:1px solid #b3b3b3;transform:rotate(45deg);}
    .red{color:#f14d4c;}
    .orange{color:#f8b551;}
    .center{text-align:center;}

    .blk{background:#fff;position:relative;padding-left:0.2rem;color:#666;font-size:0.3rem;}
    .blk.mg-30{margin:0.3rem 0;}
    .blk.profile{height:1.69rem;}
    .blk.profile .avatar{width:0.82rem;height:0.82rem;margin:0.44rem 0.1rem 0 0;border-radius:50%;overflow:hidden;float:left;}
    .blk.profile .avatar img{width:0.82rem;display:block;}
    .blk.profile .username{float:left;font-size:0.3rem;line-height:1.69rem;}
    .blk.list{height:0.89rem;margin:1px;}
    .blk.nav{height:1.94rem;text-align:center;display:flex;display:-webkit-box;}
    .blk.nav span{display:flex;display:-webkit-box;height:1.94rem;flex-grow:1;-webkit-box-flex:1;}
    .blk.nav span .icon{
        display:block;
        margin:0 auto;
        width:0.7rem;
        height:1.4rem;
        line-height:1.8rem;
        margin-top:0.4rem;
        background:url(../assets/icon.png) no-repeat 2% 0;
        background-size:auto 50%;
        font-size: .22rem;
    }
    .blk.nav .bank-card .icon{background-position:1% 0;}
    .blk.nav .recharge .icon{background-position:34% 0;}
    .blk.nav .withdraw .icon{background-position:66% 0;}
    .blk.nav .red-packet .icon{background-position:99% 0;}
    .blk.loan,
    .blk.credit{height:1.9rem;}
    .blk .title .icon{width:0.4rem;height:0.4rem;line-height:0.36rem;margin:0.23rem 0 0;border:1px solid #d2c19b;border-radius:50%;color:#d2c19b;text-align:center;}
    .blk .sub{min-height:0.27rem;position:absolute;top:50%;right:0.2rem;transform:translate(0,-50%);}
    .blk.loan .text{margin-left:0.5rem;color:#999;}
    .blk.loan .text .txt-1{margin:0.1rem 0;}
    .blk.loan .text .txt-1 span{font-size:0.33rem;}
    .credit .chart{width:1.9rem;height:1.9rem;margin:0 auto;transform:translate(0,-0.5rem);}
    .credit-chart{width:1.9rem;height:1.9rem;}
    .credit .point{transform:translate(0,-1.3rem);text-align:center;}
    .credit .point span{font-size:0.33rem;}

    .blk.h1{width:100%;height:1.05rem;line-height:1.05rem;font-size:0.27rem;text-align:center;box-shadow:#f5f5f5 0 0 1px 2px;position:fixed;top:0;z-index:99;}
    .blk.h1 .back{display:block;width:0.64rem;height:1.05rem;position:absolute;left:0;top:0;}
    .back:before{content:'';display:block;width:0.32rem;height:0.32rem;margin:0.35rem 0.23rem;border-top:1px solid #b3b3b3;border-left:1px solid #b3b3b3;transform:rotate(-45deg);}
    .blk.h1 .ask{display:block;height:1.05rem;line-height:1.05rem;padding:0 0.2rem;color:#5781bd;font-size:0.23rem;position:absolute;right:0;top:0;}
    .blk.info{margin-top:1.06rem;overflow:hidden;}
    .info .profit{padding:0.6rem 0 0.4rem;text-align:center;}
    .info .profit span{font-size:0.8rem;}
    .info .tag span{display:inline-block;background:#ffe8e8;padding:0.09rem 0.28rem 0.11rem;margin:0 0.3rem;border-radius:3px;font-size:0.2rem;color:#ff8383;}
    .info .quota,
    .info .expire{width:49%;float:left;text-align:center;padding:0.4rem 0 0.6rem;color:#999;}
    .info .quota span,
    .info .expire span{font-size:0.28rem;}
    .info .expire:before{content:'';display:block;width:1px;height:0.6rem;float:left;background:#eee;}
    .blk.notice{height:0.9rem;line-height:0.9rem;text-align:center;}
    .blk.period{text-align:center;padding:0.4rem 0 0.5rem;}
    .blk.period span{display:inline-block;position:relative;vertical-align:middle;}
    .blk.period .chart .cycle{width:0.7rem;height:0.7rem;line-height:0.52rem;border:0.08rem solid #f2f0ea;border-radius:50%;background:#fff;text-align:center;color:#ccc;z-index:98;}
    .blk.period .chart .line{width:0.88rem;height:0.15rem;border-top:0.04rem solid #f2f0ea;border-bottom:0.04rem solid #f2f0ea;background:#fff;z-index:99;}
    .blk.period .chart span.mglf{margin-left:-0.08rem;}
    .blk.period .chart span.active{background:#f8b551;color:#fff;}
    .blk.period .text span{color:#999;width:2.2rem;margin-top:0.15rem;}
    .blk.period .text span.active{color:#333;}
    .blk.h2{height:0.66rem;line-height:0.66rem;margin-bottom:1px;}
    .blk.h2 .title{color:#333;}
    .blk.text{color:#999;padding:0.35rem 0.23rem 0.4rem;margin-bottom:0.3rem;}
    .blk.safeguard{text-align:center;padding:0.4rem 0 0.38rem;margin-bottom:0.3rem;}
    .blk.safeguard span{display:inline-block;margin:0.2rem;}
    .blk.safeguard .icon{width:1.22rem;height:1.22rem;background:url(../assets/icon-2.png) no-repeat 0 0;background-size:100% auto;}
    .blk.safeguard .sg-2 .icon{background-position:0 50%;}
    .blk.safeguard .sg-3 .icon{background-position:0 100%;}
    .blk.analysis .nav{text-align:center;}
    .blk.analysis .nav li{display:inline-block;padding:0.4rem 0.1rem 0.1rem;margin:0 0.3rem;}
    .blk.analysis .nav li.active{color:#f8b551;border-bottom:2px solid #f8b551;}
    .blk.analysis .chart{height:4.4rem;margin:0 auto;text-align:center;}
    .blk.analysis .chart .point{font-size:0.45rem;transform:translate(0,-3rem);}
    .blk.analysis .chart .tags{transform:translate(0,-3.4rem) scale(0.45);}
    .blk.analysis .chart .tags span{display:inline-block;width:1.7rem;color:#949dc3;font-size:0.6rem;}
    .blk.analysis .chart .tags span i{display:inline-block;width:1.7rem;height:0.8rem;line-height:0.7rem;border:2px solid #f8b551;border-radius:6px;color:#f8b551;font-style:normal;font-size:0.4rem;}
    #analysis-chart{width:4.4rem;height:4.4rem;margin:0 auto;}
    .more-faq{text-align:center;color:#5781bd;height:0.78rem;line-height:0.78rem;border-top:1px solid #eee;border-bottom:1px solid #eee;background:url(../assets/icon-3.png) repeat 0 0;background-size:auto 7.7%;font-size:0.22rem;}
    .slide-ask{text-align:center;color:#ccc;height:0.6rem;line-height:0.6rem;font-size:0.22rem;}
    .icon.arrow-down{width:0.11rem;height:0.11rem;border-bottom:1px solid #f8b551;border-right:1px solid #f8b551;transform:rotate(45deg);}
    .icon.arrow-down:before{content:'';display:block;width:1px;height:0.14rem;background:#f8b551;transform:rotate(-45deg) translate(0.04rem,0);}
    .btn{display:block;height:0.9rem;line-height:0.9rem;background:#f14d4c;text-align:center;color:#fff;font-size:0.23rem;}

    .blk a{
        color: #666;
    }
</style>
