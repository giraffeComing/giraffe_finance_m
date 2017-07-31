<template>
  <div class='detail-list' v-if="rendered">
    <div class="item" v-for="item in listData">
      <span class="name">{{item.name}}</span>
      <i class="icon-right"></i>
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
      listData: ""
    },
    created:function () {
      this.rendered = true;
    },
    mounted:function () {
    
    },
    methods: {
    
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .detail-list{
    background-color: #fff;
    margin-top: .2rem;
    padding:0 .2rem;
    
    .item{
      position: relative;
      line-height: .88rem;
      background-color: #fff;
      border-top: 1px solid #eee;
      
      &:first-child{
        border-top:0;
      }
      
      .name{
        font-size: .3rem;
        color: #666;
      }
      .icon-right{
        position: absolute;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        transform: translateY(-50%);
        display: inline-block;
        width: .18rem;
        height: .32rem;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        /*background-image: url("../assets/icon-right.png");*/
      }
    }
  }
</style>
