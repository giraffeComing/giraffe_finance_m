<template>
    <div class="canvasWrap" v-if="rendered">
        <div class="box" ref="canvasBox" >
            <canvas ref="myCanvas" :style="setSize"></canvas>
        </div>
        <div class="info">
            <div class="name" :style="{color:arcColor}">90</div>
            <div class="lab-group" v-if="openLab">
                <div class="cell" v-for="(item,index) in options.lab">
                    <code :style="{color:arcColor,borderColor:arcColor}">{{item.name}}</code>
                    <span>{{item.grade}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                rendered: false,
                value: 90,
                isAnimate: true,
                bgColor: "#ddd",
                arcColor: "#f8b551",
                txtColor: "#ccc",
                openScale: true,
                openLab:true
            }
        },
        props: {
            options: ""
        },
        computed: {
          setSize:function () {
            var deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
            if(deviceWidth > 750) deviceWidth = 750;
            
            return {
            	width:'100%',
              height:deviceWidth/750*400+'px'
            }
          }
        },
        methods: {
            setfill : function () {
                const self = this;
                const canvas = self.$refs.myCanvas;
                const width = canvas.clientWidth * 2;
                const height = canvas.clientHeight * 2;
                const base = height < width ? height : width;
                const option = {
                    ctxWidth : width,                //画布宽度
                    ctxHeight : height,              //画布高度
                    radius : base * .35,				     //半径
                    lineWidth : base * .04,			     //线宽
                    circleX : width * .5,            //圆心X
                    circleY : base * .6,             //圆心Y
                };
                var ctx = null;
                ctx = canvas.getContext("2d");
                ctx.canvas.width = width;
                ctx.canvas.height = height;
  
                if (this.isAnimate) {
                    let stepNum = 0;
                    !function animate() {
                        if (stepNum <= self.value) {
                            self.__setTime = setTimeout(animate, 10);
                            self.fill(ctx, option ,stepNum);
                            stepNum++;
                        } else {
                            clearTimeout(self.__setTime);
                        }
                    }();
                } else {
                    self.fill(ctx, option ,self.value);
                }
            },
            fill : function (ctx,option,num) {
                this.clearFill(ctx,option);
                if (this.openScale) {
                    this.fillScale(ctx,option);
                }
                this.fillBg(ctx,option);
                this.fillArc(ctx, option, num);
            },
            clearFill : function (ctx,option) {
                ctx.clearRect(0, 0, option.ctxWidth, option.ctxHeight);
            },
            fillBg : function (ctx,option) {
                const {circleX, circleY, radius,lineWidth} = option;
                const plan = 100;	                            //进度值
                const startAngle = Math.PI / 180 * 135;				            //起点角度
                const endAngle = Math.PI / 180 * (135 + (2.7 * plan));		//终点角度

                ctx.beginPath();
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = this.bgColor;
                ctx.arc(circleX, circleY, radius, startAngle, endAngle, false);
                ctx.lineCap = "round";
                ctx.stroke();
            },
            fillArc : function (ctx, option, num) {
                const {circleX, circleY, radius,lineWidth} = option;
                const plan = num ? num : 100;	                        //进度值
                const startAngle = Math.PI / 180 * 135;				            //起点角度
                const endAngle = Math.PI / 180 * (135 + (2.7 * plan));		//终点角度

                ctx.beginPath();
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = this.arcColor;
                ctx.arc(circleX, circleY, radius, startAngle, endAngle, false);
                ctx.lineCap = "round";
                ctx.stroke();
            },
            fillScale : function (ctx,option) {
                const scaleArr = ["0", "20", "50", "80", "100"];
                for (var key in scaleArr) {
                    this.fillScaleDraw(ctx,option, scaleArr[key]);
                }
            },
            fillScaleDraw : function (ctx,option, scale) {
                const {ctxWidth,circleX, circleY, radius,lineWidth} = option;
                const dx = lineWidth * 2; // 刻度宽度
                const dy = 2;  // 刻度高度
                const deg = Math.PI / 180 * (135 + (2.7 * scale)); // 角度换算弧度
                const offsetY = Math.sin(deg) * radius; // 计算刻度Y轴位置
                const offsetX = Math.cos(deg) * radius; // 计算刻度X轴位置
                const txtOffsetX = scale == 50 ? -15 : scale < 50 ? offsetX * .6 : offsetX * .3;
                const txtOffsetY = scale == 50 ? offsetY * .3 : offsetY * .1;

                ctx.save();
                ctx.font = ctxWidth / 750 * 28 + "px Microsoft YaHei ";
                ctx.fillStyle = this.txtColor;
                ctx.translate(circleX + offsetX, circleY + offsetY); // 修改画布坐标原点
                ctx.fillText(scale, txtOffsetX, txtOffsetY);
                ctx.rotate(deg); // 旋转刻度
                ctx.fillRect(0, 0, dx, dy); // 画出刻度

                ctx.restore();
            }
        },
        mounted: function () {
            this.setfill();
        },
        created() {
            this.rendered = true;
            for (var key in this.options) {
                this[key] = this.options[key];
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .canvasWrap {
        position: relative;
        width: 100%;
        height: 4rem;
        margin: 0 auto;
        overflow: hidden;
        background-color: #fff;

        .box {
            width: 100%;
            height: 100%;
          
            canvas{
                -webkit-transform: translateZ(1px);
                -moz-transform: translateZ(1px);
                transform: translateZ(1px);
            }
        }

        .info {
            position: absolute;
            top: 55%;
            left: 0;
            width: 100%;
            z-index: 10;
            text-align: center;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            transform: translateY(-50%);
            pointer-events: none;

            .name {
                color: #f8b551;
                font-size: .48rem;
            }
            .lab-group {
                margin-top: .1rem;
                .cell {
                    display: inline-block;
                    margin: 0 .04rem;
                    min-width: .62rem;
                    code {
                        font-style: normal;
                        color: #f8b551;
                        border: 1px solid #f8b551;
                        font-size: .2rem;
                        display: block;
                        border-radius: .03rem;
                    }
                    span {
                        display: block;
                        line-height: .4rem;
                        font-size: .28rem;
                        color: #99c;
                    }
                }
            }
        }
    }


</style>
