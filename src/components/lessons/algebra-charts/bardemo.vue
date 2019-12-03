<template>
    <div>
        <div id="myChart" :style="{width: '400px', height: '450px'}"></div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: ''
            }
        },
        props:['houseStyle'],
        mounted () {
            this.drawLine()
            console.log(this.houseStyle)
        },
        methods: {
            drawLine () {
                // 基于准备好的dom, 初始化echarts
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: {},
                    grid: {
                        left: '1%',
                        bottom: '5%',
                        containLabel: true
                    } ,
                    tooltip: {},
                    xAxis: {
                        type : 'category',
                        data: ['商务办公用房','门面房','办公用房','集体宿舍','公租房','学生房'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel:{
                            interval:0,//横轴信息全部显示
                            rotate:-30,//-30度角倾斜显示
                        }
                    },
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series: [{
                        type: 'bar',
                        barWidth: '50%',
                        data: [{
                            value:this.houseStyle[0],
                            itemStyle:{
                                color:'#4383C9'
                            }
                        },
                            {
                                value:this.houseStyle[1],
                                itemStyle:{
                                    color:'#7B5BAA'
                                }
                            },
                            {
                                value:this.houseStyle[2],
                                itemStyle:{
                                    color:'#BA6329'
                                }
                            },
                            {
                                value:this.houseStyle[3],
                                itemStyle:{
                                    color:'#B92E2E'
                                }
                            },
                            {
                                value:this.houseStyle[4],
                                itemStyle:{
                                    color:'#6E8C34'
                                }
                            },
                            {
                                value:this.houseStyle[5],
                                itemStyle:{
                                    color:'#21A579'
                                }
                            }]
                    }]
                })
            }
        },
        watch:{
            houseStyle:{
                handler(val,oldval){
                    this.houseStyle=val
                    this.drawLine ()
                },
                deep:true
            }
        }
    }
</script>