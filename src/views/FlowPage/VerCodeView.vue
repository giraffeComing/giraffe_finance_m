<template>
    <div class="vercode">
        <!--loading组件用于res信息提示-->
        <transition name="fade">
            <v-load v-if="showLoading" :opts="showResData"></v-load>
        </transition>
        <v-header-back :opts="HeadData"></v-header-back>
        <div class="form-tpd">
            <ul class="form">
                <li>
                    <span class="key">验证码已发送至您的手机号：{{phone}}</span>
                </li>
            </ul>
            <ul class="form">
                <li>
                    <input type="tel" placeholder="请输入验证码" v-model="captcha">
                    <div class="f-btn">重新获取</div>
                </li>
            </ul>
            <div class="btn" @click="toOrderSure">完成</div>
        </div>
    </div>
</template>

<script>
    //    页头组件
    import VHeaderBack from '../../components/layout/HeaderBack.vue';
    import qs from 'qs'
    import VLoad from '../../components/layout/Loading'
    export default {
        name: '',
        components: {
            VHeaderBack,
            VLoad
        },
        data () {
            return {
                HeadData:{
                    name:"绑定银行卡",
                },
                phone : this.$route.query.phone,
                captcha:'',
                //控制提示层的显隐
                showLoading:false,
                //提示信息
                showResData:''
            }
        },
        methods:{
            toOrderSure:function () {

                //                点击提交之后立刻显示提示层，覆盖按钮不能重复点击
                this.showLoading=true;
//                默认提示信息，每次重新复制，覆盖掉上次的提示信息
                this.showResData = '请稍后...';

                this.axios.post(API_ROOT+'/apife/bindBankCardStep2',qs.stringify({
                    reqSeq : this.$route.query.reqSeq,
                    captcha : this.captcha
                    })
                )
                    .then((response) => {
                        if(response.data.code===0){
                            this.$router.push({
                                path:'/flow/password',
                                query:{
                                    reqSeq : this.$route.query.reqSeq,
                                }
                            })
                        }
                        else {
//                            接口返回的错误提示信息
                            this.showResData = response.data.msg;
                            //                            开定时器关闭提示层
                            setTimeout(()=>{
                                this.showLoading=false;
                            },1500)
                        }
                    })
                    .catch((error) => {
                    });





            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .vercode{
        background: #f5f5f5;
        header{
            /*position: fixed;*/
            /*top: 0;*/
            position: relative;
            width: 100%;
            height: .9rem;
            font-size: .32rem;
            line-height: .9rem;
            text-align: center;
            color: #666;
            background-color: #fff;
            box-shadow: 0 .02rem .02rem 0 #e9ebed;
        }
        .arrow-back{
            position: absolute;
            margin: auto;
            left: .28rem;
            top: 0;
            bottom: 0;
            width: .3rem;
            height: .3rem;
            transform: rotate(45deg);
            border-left: 1px solid #cecece;
            border-bottom: 1px solid #cecece;
        }
        .r-href{
            position: absolute;
            right: .2rem;
            font-size: .26rem;
            color: #5781bd;
            text-decoration: none;
        }
        .verify .f-default{
            padding: .9rem 0 .16rem;
            font-size: 0;
            text-align: center;
        }
        .verify h3{
            font-size: .32rem;
            line-height: 1.5;
            text-align: center;
            color: #f8b551;
        }
        .verify .subtit{
            padding-top: .08rem;
            font-size: .26rem;
            line-height: 1.5;
            text-align: center;
            color: #999;
        }
        .verify .top-margin{
            margin-top: .94rem;
        }
        .form-tpd{
            padding-top: .82rem;
        }
        .form{
            margin-top: .2rem;
            background-color: #fff;
        }
        .form li{
            display: flex;
            margin-left: .2rem;
            height: .9rem;
            border-bottom: 1px solid #eee;
            overflow: hidden;
        }
        .form li:last-of-type{
            border-bottom: none;
        }
        .form .key{
            font-size: .26rem;
            line-height: .84rem;
            color: #666;
        }
        .form .value{
            flex-grow: 1;
            margin-right: .2rem;
            font-size: .26rem;
            line-height: .84rem;
            text-align: right;
            color: #f8b551;
        }
        .form label{
            align-self: center;
            flex-shrink: 0;
            margin-right: .38rem;
            padding-right: .4rem;
            height: .3rem;
            border-right: 1px solid #eee;
            font-size: .26rem;
            line-height: .3rem;
            color: #666;
        }
        .form input{
            flex-grow: 1;
            flex-shrink: 1;
            margin-right: .2rem;
            min-width: 2.2rem;
            border: none;
            outline: none;
            font-size: .26rem;
        }
        .form input::-webkit-input-placeholder{
            color: #ccc;
        }
        .form .f-btn{
            width: 2rem;
            font-size: .26rem;
            line-height: .9rem;
            text-align: center;
            color: #fff;
            background-color: #5781bd;
        }
        .form .bank{
            flex-grow: 1;
            padding: 0 .1rem;
            margin-left: -.1rem;
            margin-right: .2rem;
            border: none;
            outline: none;
            font-size: .26rem;
            line-height: .9rem;
            text-overflow: ellipsis;
            color: #666;
            -webkit-appearance: none;
            -moz-appearance: none;
        }

        .btn{
            margin-top: .4rem;
            margin-left: .2rem;
            margin-right: .2rem;
            height: .9rem;
            font-size: .26rem;
            line-height: .9rem;
            text-align: center;
            color: #fff;
            overflow: hidden;
            border-radius: .03rem;
            background-color: #f14d4c;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>
