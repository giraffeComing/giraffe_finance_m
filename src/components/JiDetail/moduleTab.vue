<template>
  <div class='module-tab' v-if="rendered">
    <div class="title">小浪智投分析</div>
    <div class="tabs">
      <span v-for="(item,index) in tabData.data" @click="changeCur(index)" :class="{active:current===index}">{{item.name}}</span>
    </div>
    <div class="box">
        <component :options="options" v-if="rendered" :is="currentView" ></component>
    </div>
  </div>
</template>
<script>
  import VScore from './score'
  import VScore02 from './score02'
  import VScore03 from './score03'
  export default {
    components: {
      VScore,
      VScore02,
      VScore03,
    },
    data() {
      return {
        current:0,
        currentView:"VScore",
        rendered : false,
        tabView:['VScore','VScore02','VScore03']
      }
    },
    props: {
      tabData: ""
    },
    created:function () {
      this.rendered = true;
      this.options = this.tabData.data[this.current];
    },
    mounted:function () {
    
    },
    methods: {
      changeCur : function (i) {
        this.current=i;
        this.currentView = this.tabView[i];
        this.options = this.tabData.data[this.current];
      }
    },
    computed:{
    
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .module-tab{
    background-color: #fff;
    margin-top: .2rem;
    
    .title{
      line-height: .66rem;
      padding:0 .20rem;
      font-size: .3rem;
      color: #333;
      border-bottom: 1px solid #eee;
    }
    .tabs{
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
      
      span{
        width: 33.333%;
        float: left;
        text-align: center;
        font-size: .3rem;
        line-height: .52rem;
        color: #666;
        border-bottom: .04rem solid transparent;
        -webkit-tap-highlight-color:rgba(255,0,0,0);
        
        &.active{
          color: #f8b551;
          border-bottom-color: #f8b551;
        }
      }
    }
  }
</style>
