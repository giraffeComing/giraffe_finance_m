<template>
    <div class="main-wrap">
        <v-header-back :opts="HeadData"></v-header-back>
        <v-echart :chartOption="chartOption"></v-echart>
        <v-market :marketOption="marketOption"></v-market>
    </div>
</template>
<script>
    import VMarket from '../components/JiDetail/Market'
    import VEchart from '../components/JiDetail/echart'
    //    页头组件
    import VHeaderBack from '../components/layout/HeaderBack.vue';

    const themeColor = ['#f14d4c', '#f9b552', '#d3c19b', '#e0e0e0', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
    const chartData = [
        {name:"私房钱",value:10},
        {name:"理财账户",value:30},
        {name:"保险产品",value:40},
        {name:"基金",value:20}
    ];

    export default {
        components: {
            VEchart,
            VMarket,
            VHeaderBack
        },
        data() {
            return {
                HeadData:{
                    name:"我的资产",
                },
                marketOption:{
                    symbol:"100032"
                },
                chartOption : {
                    style:{
                        width:'100%',
                        height:'6rem'
                    },
                    option:{
                        color: themeColor,
                        legend: null,
                        series: [
                            {
                                name:'总资产',
                                type:'pie',
                                center: ['50%', '40%'],
                                radius: ['35%', '60%'],
                                avoidLabelOverlap: false,
                                label: null,
                                silent: true,
                                clockwise: false,
                                labelLine: {
                                    normal: {
                                        show: false
                                    }
                                },
                                data: chartData
                            }
                        ]
                    }
                }
            }
        },
        created() {
            document.body.style.backgroundColor = "#fff";
            for(var key in chartData){
                chartData[key].color = themeColor[key];
            }
            this.chartOption.chartData = chartData;
        },
        mounted:function () {

        },
        methods: {

        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .main-wrap{
        width: 100%;
        max-width: 750px;
        margin:0 auto;
        font-size: .16rem;
    }
</style>
