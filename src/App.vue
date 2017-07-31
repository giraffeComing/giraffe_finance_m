<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view  class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import reset from "./scss/reset.scss"
  export default {
      name: 'app',
      data(){
          return{
              transitionName: 'slide-left'
          }
      },
      mounted:function(){
          let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
              recalc = function() {
                  //设置根字体大小
                  document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth/7.5+"px";
              };
          //绑定浏览器缩放与加载时间
          window.addEventListener(resizeEvt, recalc, false);
          document.addEventListener('DOMContentLoaded', recalc, false);
      },
      watch: {
          '$route' (to, from) {
              if(to.path == '/home'){
                  this.transitionName = 'slide-right';
              }else{
                  this.transitionName = 'slide-left';
              }
          }
      }
  }
</script>

<style>
  html{
    height: 100%;
  }
  body{
    height: 100%;
  }
  #app {
    height: 100%;
    background: #f5f5f5;
    /*background: #fff;*/
    font: 0.36rem/1.5 Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\5b8b\4f53,sans-serif;
    color: #5e5e5e;
  }

  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
  /*子路由动画*/
  @keyframes routeFadeIn {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }

  .route-fade-in{
    animation: routeFadeIn .8s;
    overflow-y: auto;
  }

</style>
