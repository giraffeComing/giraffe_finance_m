<template>
    <div class="flow-realname">
        <!--loading组件用于res信息提示-->
        <transition name="fade">
            <v-load v-if="showLoading" :opts="showResData"></v-load>
        </transition>
        <div>
            <v-header-back :opts="HeadData"></v-header-back>
            <div class="verify">

                <ul class="form top-margin">
                    <li>
                        <label for="u_name">密&emsp;&emsp;码</label>
                        <input type="password" id="u_name" placeholder="请输入密码" v-model="setPassword.first">
                    </li>
                    <li>
                        <label for="u_idnum">确认密码</label>
                        <input type="password" id="u_idnum" placeholder="请再次输入密码" v-model="setPassword.second">
                    </li>
                </ul>

                <div class="btn" @click="VerCode">确认</div>
                <div class="h50"></div>
            </div>
        </div>
    </div>
</template>

<script>

    import qs from 'qs'
    //    页头组件
    import VHeaderBack from '../../components/layout/HeaderBack.vue';
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
                    name:"设置密码",
                },
                setPassword:{
                    first : '',
                    second : ''
                },
                //控制提示层的显隐
                showLoading:false,
                //提示信息
                showResData:''
            }
        },
        created(){
            //$nextTick这个方法保证了dom结构加载完成之后再执行

        },
        methods:{

            axiosSetPassWord:function () {
                this.axios.post(API_ROOT+'/apife/openAccount',qs.stringify({
                        reqSeq : this.$route.query.reqSeq,
                        payPwd : this.setPassword.second
                    })
                )
                    .then((response) => {

                    console.log(response.data)
                        if(response.data.code===0){
                            //路由转向实名认证页面
                            this.$router.push(
                                {
                                    path:'/order/ordersure',
                                }
                            )
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
            },

            VerCode(){
//                点击提交之后立刻显示提示层，覆盖按钮不能重复点击
                this.showLoading=true;
//                默认提示信息，每次重新复制，覆盖掉上次的提示信息
                this.showResData = '请稍后...';
                if(this.setPassword.first === this.setPassword.second){
                    this.axiosSetPassWord()
                }else{
//                默认提示信息，每次重新复制，覆盖掉上次的提示信息
                    this.showResData = '两次密码不一致，请重新输入';
//                            开定时器关闭提示层
                    setTimeout(()=>{
                        this.showLoading=false;
                    },1500)
                }

            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .flow-realname{
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
        .agreement{
            position: relative;
            padding-top: .16rem;
            padding-left: .54rem;
            font-size: 0;
        }
        .agreement p{
            font-size: .26rem;
            line-height: 1.5;
            color: #666;
        }
        .agreement p a{
            color: #ccc;
            text-decoration: none;
        }
        .agreement a{
            font-size: .26rem;
            line-height: 1.5;
            color: #ccc;
            text-decoration: none;
        }
        .checkbox{
            position: absolute;
            left: .18rem;
            top: .22rem;
            width: .3rem;
            height: .3rem;
        }
        .checkbox input[type=checkbox]{
            display: none;
        }
        .checkbox input[type=checkbox]~label{
            display: inline-block;
            width: .3rem;
            height: .3rem;
            font-size: .26rem;
            line-height: 1.5;
            background: url(../../assets/check.png) no-repeat center/contain;
        }
        .checkbox input[type=checkbox]:checked~label{
            background: url(../../assets/checked.png) no-repeat center/contain;
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
        .h50{
            height: .5rem;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>
