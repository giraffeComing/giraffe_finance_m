<template>
  <div class='footer' v-if="rendered">
    <div class="footer-group">
      <!--<div class="btn" v-for="(item,index) in btnGroup" :class="item.style">{{item.name}}</div>-->
      <div class="btn btn-gray">关注</div>
      <div class="btn btn-orange">定投</div>
      <div class="btn btn-red" @click="flowRealName">购买</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rendered : false
      }
    },
    props: {
      btnGroup: ""
    },
    created:function () {
      this.rendered = true;
    },
    mounted:function () {
      document.body.style.paddingBottom = '.9rem';
    },
    methods: {
        flowRealName(){

            this.$emit('purchase')
            //路由转向实名认证页面
//            this.$router.push(
//                {
//                    path:'/flow/realname',
//                }
//            );
            this.$router.push(
                {
                    path:'/order/ordersure',
                }
            );
        }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .footer{
    /*position: fixed;*/
    /*left: 0;*/
    /*bottom: 0;*/
    /*width:100%;*/
    .footer-group{
      width: 100%;
      max-width: 750px;
      margin:0 auto;
      &:before,
      &:after {
        content:"";
        display: table;
      }
      &:after {
        clear:both;
        overflow: hidden;
      }
      
      .btn{
        display: inline-block;
        float: left;
        width: 33.3333%;
        line-height: .9rem;
        text-align: center;
        color:#fff;
        font-size: .3rem;
        
        &.btn-gray{
          background-color: #cbcbcb;
        }
        &.btn-orange{
          background-color: #d2c19b;
        }
        &.btn-red{
          background-color: #f14d4c;
        }
      }
    }
  }
</style>
