<template>
  <div class="orderWrap">
    <v-header-back :opts="HeadData"></v-header-back>
      <div class="wrap">
        <div class="wrap-con">
          <div class="res-wrap pay-ok">支付成功</div>
          <div class="order-mail">
            <div class="title border-1px clearfix">
              <span>南方成份精选混合A</span>
              <span>(80880822)</span>
            </div>
            <div class="title border-1px clearfix">
              <span>收款方</span>
              <span>北京新浪仓石基金有限公司</span>
            </div>
            <div class="title border-1px clearfix">
              <span>订单</span>
              <span>10083948394894</span>
            </div>
            <div class="title border-1px clearfix">
              <span>下单时间</span>
              <span>2017-05-22</span>
            </div>
          </div>
          <div class="progress step_1">
            <ul>
              <li>购买支付成功</li>
              <li>基金公司确认份额</li>
              <li>计算收益</li>
              <li>收益到账</li>
            </ul>
          </div>
          <div class="finished" @click="toHome">完成</div>
          <p class="question"><a href="#">对订单有疑问？</a></p>
        </div>
      </div>
  </div>
</template>
<script>
    //    页头组件
    import VHeaderBack from '../../components/layout/HeaderBack.vue';
    export default{
        methods:{
            toHome:function () {
                this.$router.push({
                    path:'/home',
                })
            }
        },
        components: {
            VHeaderBack,
        },
        data () {
            return {
                HeadData:{
                    name:"支付结果",
                }
            }
        },
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
        margin-right: 0.6rem;
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
      .res-wrap{
        height: 1.7rem;
        line-height: 1.7rem;
        font-size: 0.3rem;
        color: #000;
        text-align: center;
        &.pay-ok{
          background: url(../../assets/pay_success.png) no-repeat 38% center #fffeef;
          background-size:0.38rem auto;
        }

      }
      .order-mail{
        background: #fff;
        margin: 0.2rem 0;
        .title{
          height: 0.9rem;
          line-height: 0.9rem;
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
      }
      .progress{
        width:100%;
        margin-left: 0.4rem;
        margin-bottom: 0.3rem;
        &.step_1{
          background: url(../../assets/fund_pro_bg_1.png) no-repeat left center;
          background-size: 0.72rem auto;
        }
        ul{
            margin-left:1.3rem;
            li{
              font-size: 0.3rem;
              line-height: 1rem;
              margin-bottom: 0.12rem;
              color:#999;
            }
        }
      }
      .finished{
        font-size: 0.3rem;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        background: #f14d4c;
        color: #fff;
        border-radius: 4px;
      }
      .question{
        text-align: center;
        font-size: 0.28rem;
        padding: 0.24rem 0;
        a{color: #5781bd;}
      }
    }
  }
</style>
