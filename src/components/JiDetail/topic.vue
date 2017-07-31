<template>
  <div class='topic' v-if="rendered">
    <div class='item'>净值 <span>{{fundData.worth}}</span></div>
    <div class='item'>最近涨幅 <span :class="fundData.gainClass">{{fundData.gains}}</span></div>
    <div class='item'>{{fundData.fundType}}</div>
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
      fundData: ""
    },
    created:function () {
      this.fundData.gainClass = this.setGainClass(this.fundData.gains);
      this.rendered = true;
    },
    mounted:function () {
    
    },
    methods: {
        setGainClass:function (val) {
          return val < 0 ? "green" : "red";
        }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .topic{
    background-color: #fff;
    margin-top: .2rem;
    &:before,
    &:after {
      content:"";
      display: table;
    }
    &:after {
      clear:both;
      overflow: hidden;
    }
    
    .item{
      padding:.2rem;
      text-align: center;
      line-height: .5rem;
      font-size: .3rem;
      float: left;
      width: 33.333%;
      position: relative;
      color: #666;
      
      &:after{
        position: absolute;
        right: 0;
        top:0;
        content: "|";
        line-height: .9rem;
        color: #ccc;
      }
      &:first-child{
        span{
          color:#f8b551;
        }
      }
      &:nth-child(2){
        width: 43.333%;
        .red{
          color:#f14d4c;
        }
        .green{
          color:green;
        }
      }
      &:last-child{
        width: 23.333%;
        &:after{
          content: "";
        }
      }
    }
  }
</style>
