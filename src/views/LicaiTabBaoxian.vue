<template>
    <div class="route-fade-in"  ref="comBodyBaoxian">
        <div>
            <div class="baoxian-star">
                <img src="../assets/bxbg.jpg" alt="">
            </div>
            <div class="baoxian-tabs">
                <div v-for="(item,index) in tabs"
                     @click="toggle(index,item.tabView)"
                     :class="{current:now===index}">{{item.tabContent}}
                </div>
            </div>
            <!--动态组件-->
            <!--过渡效果-->
            <!--mode=out-in可以让当前未完成的动画结束，并立刻进入到新动画中-->
            <transition name="slide-fade" mode="out-in">
                <keep-alive>
                    <component :is="currentView"></component>
                </keep-alive>
            </transition>
            <!--撑开BS的垫片-->
            <div style="height: 2rem"></div>
        </div>
    </div>
</template>

<script>
    //    better scroller
    import BScroll from 'better-scroll';
    import BTabOne from '../components/Tabs/BaoxianTab01'
    import BTabTwo from '../components/Tabs/BaoxianTab02'
    import BTabThree from '../components/Tabs/BaoxianTab03'
    import VStar from '../components/Form/RateStar'
    export default {
        name: '',
        components: {
            BTabOne,
            BTabTwo,
            BTabThree,
            VStar
        },
        data () {
            return {
                BaoxianScroll:'',
                //变量now与索引比较，控制class切换
                now:0,
                //变量currentView控制动态组件切换
                currentView:'BTabOne',
                //选项卡数据结构
                tabs:[
                    {
                        tabContent:'意外险',
                        tabView:'BTabOne'
                    },
                    {
                        tabContent:'车险',
                        tabView:'BTabTwo'
                    },
//                    {
//                        tabContent:'车险',
//                        tabView:'BTabThree'
//                    },
                ]
            }
        },
        mounted(){
            bus.$on('BaoXianAxiosReady',()=>{
                this.$refs.comBodyBaoxian.style.height=this.$parent.$el.firstChild.offsetHeight+'px'
                setTimeout(()=>{
                    this._BaoxianScroll()
                },10)
            })
        },
        methods:{
            clickLi:function () {
                this.$router.push({path:'/home/baoxiandetail'})
            },
            _BaoxianScroll() {
                this._BaoxianScroll = new BScroll(this.$refs.comBodyBaoxian,{
                    click: true,
                    deceleration: 0.003,
                });
            },
            toggle:function(i,v){
                //使用data中定义的变量的时候不要忘了前面的this
                this.currentView=v;
                this.now=i;
            },
        },
//        created(){
//            this.$nextTick(function(){
//
//                this.$refs.comBodyBaoxian.style.height=this.$parent.$el.firstChild.offsetHeight+'px'
//                setTimeout(()=>{
//                    this._BaoxianScroll()
//                },10)
//
//
//            })
//
//        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .baoxian-tabs{
        overflow: hidden;
        background: #fff;
        margin: .3rem 0 .2rem;
        div{
            width: 1.6rem;
            height: .8rem;
            line-height: .8rem;
            float: left;
            font-size: .3rem;
            text-align: center;
            &.current{
                color: #f8b651;
                border-bottom: 2px solid #f8b651;
            }
        }
    }
    .baoxian-star{
        height: 2rem;
        img{ height: 2rem}
    }
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
</style>
