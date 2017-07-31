<template>
    <div class="jijin-list-tabs">
        <section>
            <table cellspacing="0" cellpadding="0">
                <tr>
                    <th class="tl">基金</th>
                    <th>单位净值</th>
                    <th>年涨跌</th>
                    <th>月涨跌幅</th>
                </tr>
                <tr v-for="item in listData" @click="clickTr(item)">
                    <td class="tl">{{item.fund_name}}<span>{{item.fund_code}}</span></td>
                    <td>{{item.netvalue}}</td>
                    <td><span class="up">+{{item.year_incratio}}</span>%</td>
                    <td><span class="up">+{{item.month_incratio}}</span>%</td>
                </tr>
            </table>
        </section>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {
                listData:[],
            }
        },
        created(){
            this.axios.get(API_ROOT+'/apife/getfundProductList?type=2')
                .then((response) => {
                    this.listData = response.data.data;
                })
                .catch((error) => {
                    console.log("接口错误")
                });
        },
        methods:{
            //点击之后将item做为参数传递到详情页
            clickTr:function (i) {
                this.$router.push({
                    path:'/home/detail',
                    query:{goodId:i.fund_code}
                })
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .jijin-list-tabs{
        section{margin-top:.2rem;background:#fff;}
        section table{ width:100%; font-size: .3rem !important;}
        section th, section td{text-align:center;padding: .1rem 0;}
        section th.tl, section td.tl{text-align:left;padding-left: .2rem;}
        section th{height:.64rem;color:#999;font-weight: 400;}
        section .tl span{display:block;color:#f8b551;}
        /*section tr.bg td{background:#fffbf4;}*/
        section .up{color:#f44e51;}
        section .down{color:#5fd82a;}

        /*add by zw*/
        tr{
            vertical-align: top !important;
        }
        table tr:nth-of-type(odd){ background:#fff;}
        table tr:nth-of-type(even){ background:#fffbf4;}
    }
</style>
