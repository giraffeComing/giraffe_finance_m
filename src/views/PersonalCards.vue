<template>
    <div>
        <v-header-back :opts="HeadData"></v-header-back>
        <section>
            <ul>
                <li class="psbc">
                    <i>快捷支付</i>
                    <div class="ic">
                        <h3>中国邮政储蓄银行卡</h3>
                        <p>898980*****9090</p>
                    </div>
                </li>
                <li class="comm">
                    <i>快捷支付</i>
                    <div class="ic">
                        <h3>中国交通银行</h3>
                        <p>898980*****9090</p>
                    </div>
                </li>
                <li class="icbc">
                    <i>快捷支付</i>
                    <div class="ic">
                        <h3>中国工商银行储蓄卡</h3>
                        <p>898980*****9090</p>
                    </div>
                </li>
                <li class="add"><p>添加银行卡</p></li>
            </ul>
        </section>
    </div>
</template>

<script>
    //    页头组件
    import VHeaderBack from '../components/layout/HeaderBack.vue';
    export default {
        name: '',
        components: {
            VHeaderBack
        },
        data () {
            return {
                HeadData:{
                    name:"银行卡",
                },
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    header{ height:.96rem; padding:.23rem .2rem; background:#fff; box-shadow:0 2px 0 #e9ebed; }
    header .back{ float:left; height:.5rem; width:.5rem; }
    header .back:before{ content:''; display:block; border:solid .02rem #c8c8c8; width:.3rem; height:.3rem; border-width:0 0 .02rem .02rem; transform:rotate(45deg); margin:.1rem; }
    header h1{ text-align:center; font-size:.36rem; }
    section{ margin:.2rem; }
    section li{ height:2rem; margin-bottom:.2rem; background:#fff; color:#fff; position:relative; border-radius:.1rem; }
    section li:before{ content:''; width:.94rem; height:.94rem; position:absolute; left:.38rem; top:.5rem; background-size:.94rem auto; border-radius:50%; }
    section li .ic{ padding:0.46rem 0 0 1.6rem; line-height:.5rem; }
    section li .ic h3{ font-size:.3rem; }
    section li .ic p{ }
    section li.add p{ color:#949dc3; font-size:.3rem; padding:.8rem 0 0 1.6rem; }
    section li.psbc{ background:#65c18a; }
    section li.comm{ background:#5792cf; }
    section li.icbc{ background:#ff6a63; }
    section li.psbc:before{ background-image:url("../assets/psbc-icon.png") }
    section li.comm:before{ background-image:url("../assets/comm-icon.png") }
    section li.icbc:before{ background-image:url("../assets/icbc-icon.png") }
    section li.add:before{ background-image:url("../assets/add.png"); background-size:1rem auto; width:1rem; height:1rem; }
    section li i{ opacity:.5; font-size:.24rem; font-style:normal; position:absolute; right:.26rem; top:.14rem; }
</style>
