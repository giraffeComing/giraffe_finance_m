<template>
    <div class="flow-realname" ref="flowRealName">
        <!--loading组件用于res信息提示-->
        <transition name="fade">
            <v-load v-if="showLoading" :opts="showResData"></v-load>
        </transition>
        <div>
            <v-header-back :opts="HeadData"></v-header-back>
            <div class="verify">
                <div class="f-default"><img src="../../assets/f_default.png"></div>
                <h3>信息认证</h3>
                <p class="subtit">完成信息认证，以享受更多新浪金融服务</p>
                <ul class="form top-margin">
                    <li>
                        <label for="u_name">姓&emsp;&emsp;名</label>
                        <input type="text" id="u_name" placeholder="请输入真实姓名" v-model="formData.userName">
                    </li>
                    <li>
                        <label for="u_idnum">身份证号</label>
                        <input type="number" id="u_idnum" placeholder="请输入身份证号" v-model="formData.userId">
                    </li>
                </ul>
                <ul class="form">
                    <li>
                        <label for="u_banknum">银行卡号</label>
                        <input type="number" id="u_banknum" placeholder="请输入银行卡卡号"  v-model="formData.userCard">
                    </li>
                    <li>
                        <label>发卡银行</label>
                        <select class="bank" v-model="formData.userBank">
                            <option disabled value="" style="color: red">请选择</option>
                            <option value="ABC">中国农业银行&nbsp;储蓄卡</option>
                            <option value="BOC">中国银行&nbsp;储蓄卡</option>
                            <option value="BOS">上海银行&nbsp;储蓄卡</option>
                            <option value="CCB">中国建设银行&nbsp;储蓄卡</option>
                            <option value="CGB">广东发展银行&nbsp;储蓄卡</option>
                            <option value="CIB">兴业银行&nbsp;储蓄卡</option>
                            <option value="CMBC">中国民生银行&nbsp;储蓄卡</option>
                            <option value="CNCB">中信银行&nbsp;储蓄卡</option>
                            <option value="HXB">华夏银行&nbsp;储蓄卡</option>
                            <option value="PSBC">中国邮政储蓄银行&nbsp;储蓄卡</option>
                            <option value="SPDB">浦东发展银行&nbsp;储蓄卡</option>
                        </select>
                    </li>
                    <li>
                        <label for="u_phone">手&ensp;机&ensp;号</label>
                        <input type="tel" id="u_phone" placeholder="银行预留手机号" v-model="formData.userPhone">
                    </li>
                </ul>
                <div class="agreement">
                    <div class="checkbox">
                        <input type="checkbox" id="agree" checked>
                        <label for="agree"></label>
                    </div>
                    <p><a href="javascript:;">《新浪金融平台协议》</a></p>
                </div>
                <div class="btn" @click="VerCode">立即认证</div>
                <div class="h50"></div>
            </div>
        </div>
    </div>
</template>

<script>
    //    better scroller
    import BScroll from 'better-scroll';
    //    页头组件
    import VHeaderBack from '../../components/layout/HeaderBack.vue';
    import VLoad from '../../components/layout/Loading'
    import qs from 'qs'
    export default {
        name: '',
        components: {
            VHeaderBack,
            VLoad
        },
        data () {
            return {
                formData:{
                    userName:'',
                    userId:'',
                    userCard:'',
                    userBank:'',
                    userPhone:''
                },
                RealNameScroll:'',
                HeadData:{
                    name:"信息认证",
                },
                //控制提示层的显隐
                showLoading:false,
                //提示信息
                showResData:''
            }
        },
        created(){
            //$nextTick这个方法保证了dom结构加载完成之后再执行
            this.$nextTick(() => {
                setTimeout(()=>{
                    this._RealNameScroll();
                },300)
            })
        },
        methods:{
            _RealNameScroll:function () {
                this.RealNameScroll = new BScroll(this.$refs.flowRealName,{
                    click: true,
                    deceleration: 0.005,
                });
            },
            //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X(大写)
            isCardNo(idNum){
                let reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
                if(reg.test(idNum) === false)
                {
                    return false;
                }
                return true;
            },
            VerCode(){
//                点击提交之后立刻显示提示层，覆盖按钮不能重复点击
                this.showLoading=true;
//                默认提示信息，每次重新复制，覆盖掉上次的提示信息
                this.showResData = '请稍后...';

                this.axios.post(API_ROOT+'/apife/bindBankCardStep1',qs.stringify({
//                    表单信息收集
                        idCardNo : this.formData.userId,
                        bankCardNo : this.formData.userCard,
                        bankCode : this.formData.userBank,
                        issueMobileNo : this.formData.userPhone,
                        realName : this.formData.userName

                    })
                )
                    .then((response) => {

                        if(response.data.code==0){
                            //路由转向实名认证页面
                            this.$router.push(
                                {
                                    path:'/flow/vercode',
                                    query:{
                                        reqSeq : response.data.data.reqSeq,
                                        phone : this.formData.userPhone
                                    }
                                }
                            )
                        }else{
//                            接口返回的错误提示信息
                            this.showResData = response.data.msg;
//                            开定时器关闭提示层
                            setTimeout(()=>{
                                this.showLoading=false;
                            },1500)
                        }

                    })
                    .catch((error) => {
                        console.log("接口错误")
                    });


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
