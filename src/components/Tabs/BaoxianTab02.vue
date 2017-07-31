<template>
    <div>
        <ul class="baoxian-list">
            <li v-for="item in listData" @click="clickLi(item)">
                <a href="http://pay.sina.com/insurance/index.html">
                    <div class="li-img"><img :src=item.logo alt=""></div>
                    <div class="li-contain">
                        <p class="li-title">{{item.name}}</p>
                        <p class="li-des">{{item.des}}</p>
                        <p class="li-num">{{item.money}}<span>元起</span></p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        created(){
            this.axios.get(API_ROOT+'/apife/getInsuranceList')
                .then((response) => {
                    this.listData = response.data.data[1].data;
                })
                .catch((error) => {
                    console.log("接口错误")
                });
        },
        data () {
            return {
                listData:[]
            }
        },
        methods:{
            clickLi:function (i) {
                localStorage.setItem("baoxianId", i.id);
                localStorage.setItem("sid", i.sid);
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .baoxian-list{
        background: #fff;
        li{
            a{
                text-decoration: none;
                display: flex;
                padding: .2rem;
                overflow: hidden;
                border-bottom: 1px dashed #eee;
            }
            .li-img{
                width: 2.8rem;
                height: 2rem;
                border-radius: .1rem;
                overflow: hidden;
                margin-right: .4rem;
                img{
                    width: 2.8rem;
                    height: 2rem;
                }
            }
            .li-contain{
                height: 2rem;
                flex: 1;
                .li-title{
                    margin-top: .2rem;
                    font-size: .4rem;
                    color: #333;
                }
                .li-des{
                    font-size: .26rem;
                    color: #666;
                }
                .li-num{
                    color: #f14d4c;
                    font-size: .48rem;
                    span{
                        color: #999;
                        font-size: .26rem;
                    }
                }
            }
        }
    }
</style>
