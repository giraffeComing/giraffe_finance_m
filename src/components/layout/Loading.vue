<template>
    <div class="loading" :style="objHeight">
        <div class="loading-animate">{{opts}}</div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {
                objHeight:''
            }
        },
        created(){

            //loading层的高度有待进一步测试验证
            this.$nextTick(()=>{
                this.objHeight ='height:'+document.documentElement.clientHeight + 'px';
            })


        },
        props:{
            opts:''
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .loading{
        /*position: absolute;*/
        position: fixed;
        left: 0;
        top:0;
        /*height: 100%;*/
        width: 100%;
        background: rgba(0,0,0,0.2);
        display: flex;
        /*align-items:center;!*垂直居中*!*/
        z-index: 999;
        .loading-animate{
            /*width: 2rem;*/
            height: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            margin: 3rem auto 0;
            padding: 0 .5rem;
            border-radius: .1rem;
            background: rgba(0,0,0,0.4);
            color: #fff;
            font-size: .28rem;
        }
    }
</style>
