<template>
    <div class="page-wrap">
        <div class="page-view">
            <div class="com-body" ref="comBodyLicai">
                <div>
                    <v-header-back :opts="jjData"></v-header-back>
                    <div class="blk info">
                        <div class="profit">
                            <span class="red">{{percentNum}}</span> %<br />
                            预期年华收益
                        </div>
                        <div class="tag center">
                            <span>高收益</span>
                            <span>低风险</span>
                            <span>低门槛</span>
                        </div>
                        <div class="quota">
                            <span class="orange">100</span>元<br />
                            起投金额
                        </div>
                        <div class="expire">
                            <span class="orange">365</span>天<br />
                            投资期限
                        </div>
                    </div>
                    <div class="blk notice mg-30">
                        按投资<span class="orange">1</span>万元计算，<span class="orange">12</span>个月后您会赚得<span class="red">7500</span>元
                    </div>
                    <div class="blk period mg-30">
                        <div class="chart">
                            <span class="cycle active">1</span><span class="line mglf active"></span><span class="line"></span><span class="cycle mglf">2</span><span class="line mglf"></span><span class="line"></span><span class="cycle mglf">3</span>
                        </div>
                        <div class="text">
		<span class="active">
			产品筹款期<br />
			2017-03-06
		</span>
                            <span>
			计息日<br />
			2017-03-06
		</span>
                            <span>
			赎回开放日<br />
			2017-03-06
		</span>
                        </div>
                    </div>
                    <div class="blk h2">
                        <div class="title">
                            产品详情
                        </div>
                        <div class="sub">
                            <span>产品协议</span>
                            <i class="icon arrow"></i>
                        </div>
                    </div>
                    <div class="blk text">
                        新浪浪淘金十期，这是一条产品详情，新浪浪淘金十期，这是一条产品详情，新浪浪淘金十期，这是一条产品详情，新浪浪淘金十期，这是一条产品详情。
                    </div>
                    <div class="blk h2">
                        <div class="title">
                            计息方式
                        </div>
                    </div>
                    <div class="blk text">
                        这是一条计息方式。
                    </div>
                    <div class="blk h2">
                        <div class="title">
                            回款方式
                        </div>
                    </div>
                    <div class="blk text">
                        这是一条回款方式。
                    </div>
                    <div class="blk h2">
                        <div class="title">
                            安全保障
                        </div>
                        <div class="sub">
                            <span>产品介绍</span>
                            <i class="icon arrow"></i>
                        </div>
                    </div>
                    <div class="blk safeguard">
	<span class="sg-1">
		<i class="icon"></i><br />
		百分之百安全对付
	</span>
                        <span class="sg-2">
		<i class="icon"></i><br />
		大机构发行
	</span>
                        <span class="sg-3">
		<i class="icon"></i><br />
		多重机构安全保障
	</span>
                    </div>
                    <div class="blk h2">
                        <div class="title">
                            小浪智投分析
                        </div>
                        <div class="sub">
                            <span></span>
                            <i class="icon arrow"></i>
                        </div>
                    </div>
                    <div class="blk analysis">
                        <ul class="nav">
                            <li class="active">经纪人建议</li>
                            <li>产品行业热度</li>
                            <li>微博舆情参考</li>
                        </ul>
                        <div class="chart">
                            <canvas ref="analysisChart" class="credit-chart"></canvas>
                            <div class="point"><span class="orange">94</span></div>
                            <div class="tags">
			<span>
				<i>负能量</i>
				20
			</span>
                                <span>
				<i>中性</i>
				50
			</span>
                                <span>
				<i>正能量</i>
				70
			</span>
                            </div>
                        </div>
                    </div>
                    <div class="more-faq">
                        更多常见问题
                    </div>
                    <div class="slide-ask">
                        下滑以即向专属经纪人提问该产品建议投资
                        <i class="icon arrow-down"></i>
                    </div>
                    <!--<a class="btn btn-gray" @click="flowRealName">立即投资</a>-->
                    <a class="btn btn-gray">已售罄</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //    better scroller
    import BScroll from 'better-scroll';

    import VHeaderBack from '../components/layout/HeaderBack'

    export default {
        name: '',
        components: {
            VHeaderBack,
        },
        data () {
            return {
                licaiScroll:'',
                jjData:{
                    name:this.$route.query.LicaiListData.name,
//                    tag:"问问经纪人",
//                    extra:"00000"
                },
                percentNum:this.$route.query.LicaiListData.num,
            }
        },
        created(){
            this.$nextTick(() => {
                //结构复杂的地方再加个延迟
                setTimeout(()=>{
                    this.LicaiScroll()
                },300)
            })

        },
        mounted(){
            this.chart();

        },
        methods: {
            backTo(){
                this.$router.go(-1)

            },
            flowRealName(){

            },
            LicaiScroll() {
                this.licaiScroll = new BScroll(this.$refs.comBodyLicai,{click: true,deceleration: 0.005});
            },
            chart(){
                var c = this.$refs.analysisChart;
                c.width = 1000;
                c.height = 1000;
                var ctx = c.getContext('2d');
                ctx.lineWidth = 30;
                ctx.lineCap="round";
                ctx.beginPath();
                ctx.arc(500,500,300,Math.PI*3/4,Math.PI*1/4,false);
                ctx.strokeStyle = '#ddd';
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(500,500,300,Math.PI*3/4,Math.PI*1/16,false);
                ctx.strokeStyle = '#f8b551';
                ctx.stroke();
                // 开始标注
                ctx.beginPath();
                ctx.moveTo(300,725);
                ctx.lineTo(240,800);
                ctx.moveTo(186,460);
                ctx.lineTo(120,450);
                ctx.moveTo(500,184);
                ctx.lineTo(500,125);
                ctx.moveTo(814,460);
                ctx.lineTo(880,450);
                ctx.moveTo(700,725);
                ctx.lineTo(760,800);
                ctx.strokeStyle = '#ddd';
                ctx.lineWidth = 5;
                ctx.lineCap="round";
                ctx.stroke();
                ctx.font="60px Arial";
                ctx.fillStyle = '#ddd';
                ctx.fillText("0",210,860);
                ctx.fillText("20",35,465);
                ctx.fillText("50",465,100);
                ctx.fillText("80",900,465);
                ctx.fillText("100",720,860);
            }
        },
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
    .blk.profile .username{float:left;font-size:0.19rem;line-height:1.69rem;}
    .blk.list{height:0.89rem;margin:1px;}
    .blk.nav{height:1.94rem;text-align:center;display:flex;display:-webkit-box;}
    .blk.nav span{display:flex;display:-webkit-box;height:1.94rem;flex-grow:1;-webkit-box-flex:1;}
    .blk.nav span .icon{display:block;margin:0 auto;width:0.7rem;height:1.4rem;line-height:1.8rem;margin-top:0.4rem;background:url(../assets/icon.png) no-repeat 2% 0;background-size:auto 50%;}
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
    .credit-chart{
        width:5rem;
        height:5rem;
        /*width:190px;*/
        /*height:190px;*/
    }
    .credit .point{transform:translate(0,-1.3rem);text-align:center;}
    .credit .point span{font-size:0.33rem;}

    /*.blk.h1{width:100%;height:1.05rem;line-height:1.05rem;font-size:0.27rem;text-align:center;box-shadow:#f5f5f5 0 0 1px 2px;position:fixed;top:0;z-index:99;}*/
    .blk.h1{
        width:100%;
        height:1.05rem;
        line-height:1.05rem;
        font-size:0.27rem;
        text-align:center;
        box-shadow:#f5f5f5 0 0 1px 2px;
        /*position:fixed;*/
        /*top:0;*/
        z-index:99;
    }

    .blk.h1 .back{display:block;width:0.64rem;height:1.05rem;position:absolute;left:0;top:0;}
    .back:before{content:'';display:block;width:0.32rem;height:0.32rem;margin:0.35rem 0.23rem;border-top:1px solid #b3b3b3;border-left:1px solid #b3b3b3;transform:rotate(-45deg);}
    .blk.h1 .ask{display:block;height:1.05rem;line-height:1.05rem;padding:0 0.2rem;color:#5781bd;font-size:0.23rem;position:absolute;right:0;top:0;}
    .blk.info{
        /*margin-top:1.06rem;*/
        overflow:hidden;
    }
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
    .blk.safeguard{
        text-align:center;
        padding:0.4rem 0.2rem 0.38rem;
        margin-bottom:0.3rem;
        display: flex;
        justify-content: space-between;
        font-size: .23rem;
    }
    .blk.safeguard span{
        display:inline-block;
        flex: 1;
        /*margin:0.2rem;*/
    }
    .blk.safeguard .icon{width:1.22rem;height:1.22rem;background:url(../assets/icon-2.png) no-repeat 0 0;background-size:100% auto;}
    .blk.safeguard .sg-2 .icon{background-position:0 50%;}
    .blk.safeguard .sg-3 .icon{background-position:0 100%;}
    .blk.analysis .nav{text-align:center;}
    .blk.analysis .nav li{display:inline-block;padding:0.4rem 0.1rem 0.1rem;
        /*margin:0 0.3rem;*/
    }
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
    .btn-gray{
        background: #c1c1c1 !important;
    }
</style>
