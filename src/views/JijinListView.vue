<template>
    <div class="route-fade-in" ref="comBodyJijinList">
        <div>
            <v-header-back :opts="HeadData"></v-header-back>
            <nav>
                <ul class="fw">
                    <li class="fi" v-for="(item,index) in tabs"
                         @click="toggle(index,item.tabView)"
                         :class="{cur:now===index}">{{item.tabContent}}
                    </li>
                </ul>
            </nav>
            <!--mode=out-in可以让当前未完成的动画结束，并立刻进入到新动画中-->
            <transition name="slide-fade" mode="out-in">
                <keep-alive>
                    <component :is="currentView"></component>
                </keep-alive>
            </transition>
        </div>
        <!--占位撑开-->
        <div class="h50"></div>
    </div>
</template>

<script>
    //    better scroller
    import BScroll from 'better-scroll';
    import JTabOne from '../components/Tabs/JijinTab01'
    import JTabTwo from '../components/Tabs/JijinTab02'
    import JTabThree from '../components/Tabs/JijinTab03'
    import JTabFour from '../components/Tabs/JijinTab04'
    import JTabFive from '../components/Tabs/JijinTab05'
    import JTabSix from '../components/Tabs/JijinTab06'
    //    页头组件
    import VHeaderBack from '../components/layout/HeaderBack.vue';
    export default {
        name: '',
        components: {
            JTabOne,
            JTabTwo,
            JTabThree,
            JTabFour,
            JTabFive,
            JTabSix,
            VHeaderBack
        },
        data () {
            return {
                HeadData:{
                    name:"基金超市",
                },
                jijinListScroll:'',
                //变量currentView控制动态组件切换
                currentView:'JTabOne',
                now:0,
                //选项卡数据结构
                tabs:[
                    {
                        tabContent:'全部',
                        tabView:'JTabOne'
                    },
                    {
                        tabContent:'货币',
                        tabView:'JTabTwo'
                    },
                    {
                        tabContent:'股票',
                        tabView:'JTabThree'
                    },
                    {
                        tabContent:'债券',
                        tabView:'JTabFour'
                    },
                    {
                        tabContent:'混合',
                        tabView:'JTabFive'
                    },
                    {
                        tabContent:'QDII',
                        tabView:'JTabSix'
                    },
                ]
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
        methods: {
            clickLi:function () {
                this.$router.push({path:'/home/detail'})
            },
            LicaiScroll() {
                this.jijinListScroll = new BScroll(this.$refs.comBodyJijinList,{
                    click: true,
                    deceleration: 0.005,
                });
            },
            toggle:function(i,v){
                //使用data中定义的变量的时候不要忘了前面的this
                this.currentView=v;
                this.now=i;
            }
        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .fw{ display:-webkit-box; display:-moz-box; display:-ms-flexbox; display:-o-box; display:flex; }
    .fi{ -webkit-box-flex:1; -moz-box-flex:1; -o-box-flex:1; -ms-flex:1; flex:1 }
    nav{ height:.6rem; background:#fff; font-size:.3rem; margin-top:.3rem; }
    nav li{ line-height:.6rem; text-align:center; margin:0 .3rem; }
    nav li.cur{ color:#f8b551; border-bottom:solid .03rem #f8b551; }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(10px);
        opacity: 0;
    }
    .h50{
        height: .5rem;
    }
</style>
