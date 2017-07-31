<template>
  <div class="orderWrap">
    <v-header-back :opts="HeadData"></v-header-back>
      <div class="wrap">
        <div class="wrap-con">
          <div class="fund-type">
            <div class="names border-1px clearfix">
              <span>{{goodName}}</span>
              <span>({{goodCode}})</span>
            </div>
            <div class="types clearfix">
              <span>{{goodType}}</span>
              <span>起购<i>10</i>元</span>
            </div>
          </div>
          <div class="amount">
            <label>金额</label>
            <input type="text" placeholder="10元起购，一元递增"/>
          </div>
          <div class="tips">申购费率 投资额*0.8%=1.45元</div>
          <div class="agreeBtn" @click="toPay">同意协议并继续</div>
          <div class="agreement"><a href="#">《新浪基金购买协议》</a><a href="#">《基金支付协议》</a></div>
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
                HeadData:{
                    name:"基金订单",
                },
                goodName:'',
                goodCode:'',
                goodType:'',
            }
        },
        created(){

            let $id = this.$localStore.get('goodsInfor');

//            拿着localstore查出来的goodid去请求一下基金详情的接口
            this.axios.get(API_ROOT+'/apife/getfundProductDetail', {
                params: {id: $id}
            }).then(
                (response)=>{
                    this.goodName = response.data.data[0].fund_name;
                    this.goodCode = response.data.data[0].fund_code;
                    this.goodType = response.data.data[0].fund_type;
                }
            ).catch((error) => {
                console.log('error')
            });

        },
        methods:{
            toPay:function () {

                this.axios.get(API_ROOT+'/apife/fundOderPay',{
                    params: {fundCode:1234,amount:19}
                }).then(
                    (response)=>{
                        console.log(response)
                    }
                ).catch((error) => {
                    console.log('error')
                });

                this.$router.push({
                    path:'/pay/paysure',
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
          /*background: url(../../assets/icon-back.png) center 0 no-repeat;*/
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
        padding: 0.3rem 0.2rem;
        font-size: 0.3rem;
        color: #999;
      }
      .agreeBtn{
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
      .agreement{
        padding:0.3rem 0 0 0.16rem;
        font-size: 0.28rem;
        a{
          color: #5781bd;
        }
      }
    }
  }
</style>
