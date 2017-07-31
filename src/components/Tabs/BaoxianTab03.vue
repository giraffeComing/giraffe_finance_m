<template>
    <div>
        <ul class="baoxian-list">
            <li v-for="item in listData">
                <a :href=item.link>
                    <div class="li-img"><img :src=item.imgSrc alt=""></div>
                    <div class="li-contain">
                        <p class="li-title">{{item.name}}</p>
                        <p class="li-des">{{item.des}}</p>
                        <p class="li-num">{{item.num}}<span>元起</span></p>
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
//            this.axios.get(API_ROOT+'/apife/getfundProductList?type=ALL')
//                .then((response) => {
//                    this.listData = response.data.data;
//                })
//                .catch((error) => {
//                    console.log("接口错误")
//                });
        },
        data () {
            return {
                listData:[
                    {
                        link : 'https://sina.cn/?from=web',
                        imgSrc : '../../../static/imgs/baoxian02.jpg',
                        name : '儿童意外险',
                        des : '意外伤害 2w元医疗',
                        num : '300'
                    },
                    {
                        link : 'https://sina.cn/?from=web',
                        imgSrc : '../../../static/imgs/baoxian03.jpg',
                        name : '儿童意外险',
                        des : '意外伤害 2w元医疗',
                        num : '300'
                    },
                    {
                        link : 'https://sina.cn/?from=web',
                        imgSrc : '../../../static/imgs/baoxian04.jpg',
                        name : '儿童意外险',
                        des : '意外伤害 2w元医疗',
                        num : '300'
                    }
                ]
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