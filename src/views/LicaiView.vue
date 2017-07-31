<template>
    <div class="page-view">
        <!--<v-header>理财</v-header>-->
        <div class="com-body" ref="comBodyLicai">
            <div>
                <ul class="licai-routers">
                    <li><router-link :to="{ path: '/licai/licai' }">理财</router-link></li>
                    <li><router-link :to="{ path: '/licai/jijin' }">基金</router-link></li>
                    <li><router-link :to="{ path: '/licai/baoxian' }">保险</router-link></li>
                </ul>
                <router-view></router-view>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    //    better scroller
//    import BScroll from 'better-scroll';
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
//                LicaiScroll:''
            }
        },
        created(){
//            this.$nextTick(function(){
//                setTimeout(()=>{
//                    this.Scroll()
//                },300)
//            })

        },

        methods: {
//            Scroll() {
//                this.LicaiScroll = new BScroll(this.$refs.comBodyLicai,{click: true});
//            }
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
            .licai-routers{
                padding-left: 3.8rem;
                display: flex;
                border-bottom: 1px solid #e9ebed;
                background: #fff;
                font-size: .3rem;
                li{
                    flex: 1;
                    a{
                        display: block;
                        text-align: center;
                        text-decoration: none;
                        color: #666;
                        height: .8rem;
                        line-height: .8rem;
                        &.router-link-active{
                            color: #f8b551 !important;
                            border-bottom: 2px solid #f8b551;
                        }
                    }
                }
            }
        }
    }
</style>
