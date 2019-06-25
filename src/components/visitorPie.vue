<template>
    <div class="visitorpie">
        <div id="visitorpie" class="" style="width: 90%;height:450px;"></div>
    </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts';
    // 引入饼状图
    import 'echarts/lib/chart/pie';
    // 引入tooltip组件
    import 'echarts/lib/component/tooltip';
    // 引入提示框和标题组件
    import 'echarts/lib/component/title';
    import 'echarts/lib/component/legend';
    
    export default {
        mounted(){
            this.myChart = echarts.init(document.getElementById('visitorpie'));
            this.initData();
        },
        props: ['pieData'],
        methods: {
            initData(){
                const option = {
                    title : {
                        text: '系统使用情况',
                        subtext: '',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['员工总数','已开户用户总数','待审核用户总数']
                    },
                    series : [
                        {
                            name: '系统使用情况',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:this.pieData.employeeNum, name:'员工总数'},
                                {value:this.pieData.checkedUserNum, name:'已开户用户总数'},
                                {value:this.pieData.uncheckedUserNum, name:'待审核用户总数'},
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },
                        }
                    ]
                };

                this.myChart.setOption(option);
            }
        },
        watch: {
            pieData: function (){
                this.initData()
            }
        }
    }
</script>

<style scoped>
    .visitorpie{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
</style>
