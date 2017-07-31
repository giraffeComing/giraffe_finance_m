<template>
  <div class="orderWrap">
    <v-header-back :opts="HeadData"></v-header-back>
      <div class="wrap">
        <div class="wrap-con">
          <div class="fund-type">
            <div class="names border-1px clearfix">
              <span>南方成份精选混合A</span>
              <span>(80880822)</span>
            </div>
            <div class="types border-1px clearfix">
              <span>支付金额</span>
              <span><i>10</i>元</span>
            </div>
            <div class="types border-1px clearfix">
              <span>手续费</span>
              <span><i>100</i>元</span>
            </div>
            <div class="tips">交易日15:00后或非交易日，购买将在下一交易日记入收益</div>
          </div>
          <div class="bankCard">
            <div class="choice clearfix" @click="showBank">
              <span>支付银行卡</span>
              <p class="bank"><img src="../../assets/CMB_icon.png" width="30" height="30"/>招商银行  储蓄卡</p>
            </div>
          </div>
          <div class="payBtn" @click="toSuccess">立即支付</div>
        </div>
      </div>
      <div class="bank-layout-wrap" v-show="bankShow">
        <i class="bank-layout-mask"></i>
        <div class="bank-layout-drawer ">
          <div class="bank-layout-title border-1px"><i class="layout-close" @click="hideBank"></i>新浪钱包</div>
          <div class="bank-layout-cont">
            <ul>
              <li class="bank-item BOCM">
                <span class="bank-logo"><img src="../../assets/BOCM_logo.png"></span>
                <p>
                  <span class="bank-name">中国交通银行储蓄银行卡</span>
                  <span class="bank-code">8989809090</span>
                </p>
                <span class="kjzf">快捷支付</span>
              </li>
              <li class="bank-item ICBC">
                <span class="bank-logo"><img src="../../assets/ICBC_logo.png"></span>
                <p>
                  <span class="bank-name">中国工商银行储蓄银行卡</span>
                  <span class="bank-code">8989809090</span>
                </p>
                <span class="kjzf">快捷支付</span>
              </li>
              <li class="bank-item BOCM">
                <span class="bank-logo"><img src="../../assets/BOCM_logo.png"></span>
                <p>
                  <span class="bank-name">中国交通银行储蓄银行卡</span>
                  <span class="bank-code">8989809090</span>
                </p>
                <span class="kjzf">快捷支付</span>
              </li>
              <li class="bank-item ICBC">
                <span class="bank-logo"><img src="../../assets/ICBC_logo.png"></span>
                <p>
                  <span class="bank-name">中国工商银行储蓄银行卡</span>
                  <span class="bank-code">8989809090</span>
                </p>
                <span class="kjzf">快捷支付</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
    //    页头组件
    import VHeaderBack from '../../components/layout/HeaderBack.vue';
    export default{

        components: {
            VHeaderBack,
        },
        data () {
            return {
                bankShow: false,
                HeadData:{
                    name:"确认支付",
                    tag:"交易须知",
                }
            }
        },
        methods: {
            showBank () {
                this.bankShow = true
            },
            hideBank () {
                this.bankShow = false
            },
            toSuccess:function () {
                this.$router.push({
                    path:'/pay/paysucces',
                })
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @mixin border-1px($color){
    position:relative;
    &:after{
      display:block;
      position:absolute;
      left:0;
      bottom:0;
      width:100%;
      border-top:1px solid $color;
      content:'';
    }
  }
  @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5){
    .border-1px{
      &:after{
        -webkit-transform: scaleY(0.7);
        transform: scaleY(0.7);
      }
    }
  }
  
  @media (-webkit-max-device-pixel-ratio: 2), (max-device-pixel-ratio: 2){
    .border-1px{
      &:after{
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
    }
  }

  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
  .clearfix{*zoom:1;}
  header{
      width: 100%;
      height: 1rem;
      margin: 0 auto;
      line-height: 1rem;
      display: -webkit-flex;
      display: -webkit-box;
      background: #fff;
      font-size: 0;
      box-shadow: 0 0 5px rgba(0,0,0,.2);
      position:relative;
      z-index: 99;
      .left-arr{
        display: inline-block;
        padding-left:0.2rem;
        height: 100%;
        width: 0.8rem;
        color: #5e5e5e;
        font-size: 20px;
        .icon-back{
          background: url(../../assets/icon-back.png) center 0 no-repeat;
          background-size: 0.26rem 0.47rem;
          width: 0.26rem;
          height: 0.47rem;
          display: inline-block;
          vertical-align: middle;
        }
      }
      p{
        font-size:0.36rem;
        color: #666;
        -webkit-flex: 1;
        -webkit-box-flex: 1;
        text-align: center;
        line-height: 1rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .right-txt{
        font-size: 0.26rem;
        margin-right: 0.2rem;
        color:#5781bd;
        font-weight: 700;
      }
    }
  .wrap{
    position: absolute;
    left: 0;
    top: 1rem;
    right: 0;
    bottom: 0;
    overflow: hidden;
    .wrap-con{
      overflow: hidden;
      overflow-y: auto;
      height: 100%;
      -webkit-overflow-scrolling: touch;
      .fund-type{
        background: #fff;
        margin: 0.2rem 0;
        .names{
          height: 0.66rem;
          line-height: 0.66rem;
          font-size:0.3rem;
          @include border-1px(rgb(238,238,238));
          &:after{
            visibility: visible;
          }
          span{
            &:first-child{
              float: left;
              padding-left: 0.2rem;
              color: #333;
            }
          }
          span{
            &:last-child{
              float: right;
              padding-right: 0.2rem;
              color: #f8b551;
            }
          }
        }
        .types{
          height: 0.9rem;
          line-height: 0.9rem;
          font-size:0.3rem;
          color: #999;
          @include border-1px(rgb(238,238,238));
          &:after{
            visibility: visible;
          }
          span{
            &:first-child{
              float: left;
              padding-left: 0.2rem;
            }
          }
          span{
            &:last-child{
              float: right;
              padding-right: 0.2rem;
            }
            i{
              color: #f8b551;
              font-style: normal;
              padding: 0 5px;
            }
          }
        }
      }
      .amount{
        font-size: 0.3rem;
        height: 0.9rem;
        line-height: 0.9rem;
        background: #fff;
        padding: 0 0.2rem;
        input{
          height: 100%;
          line-height: 0.9rem;
          outline: none;
          border: none;
          padding-left: 0.16rem;
        }
      }
      .tips{
        height: 0.9rem;
        line-height: 0.9rem;
        padding-left:0.2rem;
        font-size: 0.28rem;
        color: #999;
      }
      .payBtn{
        font-size: 0.3rem;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        background: #f14d4c;
        color: #fff;
        border-radius: 4px;
        margin-top: 0.4rem;
      }
      .bankCard{
        padding: 0 0.2rem;
        background: #fff ;
      }
      .choice{
        height: 0.9rem;
        line-height: 0.9rem;
        background: url(../../assets/bank_arrow.png) no-repeat right center;
        background-size: 0.14rem auto;
        color: #333;
        span{
          font-size: 0.3rem;
          float: left;
        }
        .bank{
          float: right;
          font-size: 0.3rem;
          margin-right: 0.3rem;
          img{
            display: inline-block;
            vertical-align: middle;
            width: 0.45rem;
            height: 0.45rem;
            margin-right:0.2rem;
            margin-bottom: 0.05rem;
          }
        }
      }
    }
  }
  .bank-layout-wrap{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    -webkit-animation: slideIn 0.24s ease-out;
    animation: slideIn 0.24s ease-out;
    .bank-layout-mask{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      background-color: rgba(0,0,0,.7);
    }
    .bank-layout-drawer{
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 10;
      width: 100%;
      max-height: 100%;
      height: 70%;
      background-color: #F5F5F5;
      .bank-layout-title{
        height: 1rem;
        line-height: 1rem;
        font-size: 0.3rem;
        position: relative;
        text-align: center;
        @include border-1px(rgb(238,238,238));
        .layout-close{
          width: 0.32rem;
          height: 0.32rem;
          background-image: url(../../assets/layout_close.png);
          background-repeat: no-repeat;
          background-size: 0.32rem auto;
          position: absolute;
          left: 0.3rem;
          top: 50%;
          z-index: 2;
          -webkit-transform: translate3d(-50%, -50%, 0);
        	transform: translate3d(-50%, -50%, 0);
        }
      }
      .bank-layout-cont{
        padding: 0 0.2rem;
        max-height: 100%;
        height: 90%;
        overflow: hidden;
        overflow-y: auto;
        background: #fff;
        ul{
          padding-bottom: 0.2rem;
        }
        .bank-item{
          height: 2rem;
          border-radius: 5px;
          position: relative;
          margin-top: 0.2rem;
          &.BOCM{
            background: #5792cf;
          }
          &.ICBC{
            background: #ff6a63;
          }
          .bank-logo{
            width: 0.94rem;
            height: 0.94rem;
            display: inline-block;
            vertical-align: top;
            margin:0.5rem 0 0.5rem 0.4rem;
            img{width: 100%; height: 100%;}
          }
          p{
            display: inline-block;
            font-size: 0.3rem;
            color: #fff;
            margin-top: 0.24rem;
            .bank-name{
              display: block;
              line-height: 0.9rem;
            }
          }
          .kjzf{
            position: absolute;
            right: 0.2rem;
            top: 0.2rem;
            color: rgba(255,255,255,0.8);
            font-size: 0.28rem;
          }
        }
      }
    }
  }
@-webkit-keyframes slideIn {
  0% {
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0); 
  }
  100% {
    -webkit-transform: none;
            transform: none; 
  } 
}
@keyframes slideIn {
  0% {
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
  }
  100% {
    -webkit-transform: none;
            transform: none; 
  }
}
</style>
