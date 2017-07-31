<template>
    <div class="com-header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {}
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .com-header{
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #fff;
        border-bottom: 1px solid #e0e0e0;
        /*border-bottom: 2px solid #888;*/
        /*box-shadow: 0px 1px 1px #e0e0e0;*/
    }
</style>
