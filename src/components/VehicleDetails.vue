<template>
    <div class="vehicle-statistics">
        <h2>车辆监控</h2>
        <!-- 页面内容 -->
        <div class="vehicle-details">
            <div class="chart-row">
                <div ref="stockChart" class="chart"></div>
                <div ref="dataMonitoringChart" class="chart"></div>
            </div>
            <div class="chart-row">
                <div ref="powerConsumptionChart" class="chart full-width"></div>
            </div>
        </div>
    </div>
</template>
  
  

<script>
import * as echarts from 'echarts';

export default {
    mounted() {
        this.renderStockChart();
        this.renderDataMonitoringChart();
        this.renderPowerConsumptionChart();
    },
    methods: {
        renderStockChart() {
            // 使用 echarts 绘制车辆库存柱状图
            const stockChart = echarts.init(this.$refs.stockChart);
            // 在这里使用随机数据绘制柱状图
            // const data = [/* 随机数据数组 */];
            const stockData = [];
            for (let i = 0; i < 7; i++) {
                stockData.push(Math.floor(Math.random() * 100)); // 生成 0 到 100 之间的随机整数
            }
            const option = {
                title: {
                    text: '车辆库存'
                },
                // ECharts 图表的配置项
                xAxis: {
                    // x 轴配置
                    type: 'category', // 指定 x 轴类型为类目轴
                    data: ['车辆A', '车辆B', '车辆C', '车辆D', '车辆E'], // x 轴类目数据
                },
                yAxis: {
                    // y 轴配置
                    type: 'value' // 指定 y 轴类型为数值轴
                },
                tooltip: {
                    trigger: 'axis', // 设置触发类型为坐标轴触发
                    formatter: function (params) {
                        // 格式化提示框内容
                        const value = params[0].value; // 获取数据值
                        return `数据值：${value}`; // 自定义提示框内容
                    }
                },
                series: [{
                    type: 'bar',
                    data: stockData,
                }]
            };
            stockChart.setOption(option);
        },
        renderDataMonitoringChart() {
            // 使用 echarts 绘制每天数据监测平滑曲线图
            const dataMonitoringChart = echarts.init(this.$refs.dataMonitoringChart);
            // 在这里使用随机数据绘制曲线图
            // const data = [/* 随机数据数组 */];
            const dataMonitoringData = [];
            for (let i = 0; i < 10; i++) {
                dataMonitoringData.push(Math.random() * 100); // 生成 0 到 100 之间的随机数
            }

            const option = {
                title: {
                    text: '每天数据监测'
                },
                // ECharts 图表的配置项
                xAxis: {
                    // x 轴配置
                    type: 'category',
                    data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日'], // x 轴类目数据
                },
                yAxis: {
                    // y 轴配置
                    type: 'value' // 指定 y 轴类型为数值轴
                },
                tooltip: {
                    trigger: 'axis', // 设置触发类型为坐标轴触发
                    formatter: function (params) {
                        // 格式化提示框内容
                        const value = params[0].value; // 获取数据值
                        return `数据值：${value}`; // 自定义提示框内容
                    }
                },
                series: [{
                    type: 'line',
                    smooth: true,
                    data: dataMonitoringData,
                }]
            };
            dataMonitoringChart.setOption(option);
        },
        renderPowerConsumptionChart() {
            // 使用 echarts 绘制设备用电量平滑曲线图
            const powerConsumptionChart = echarts.init(this.$refs.powerConsumptionChart);
            // 在这里使用随机数据绘制曲线图
            // const data = [/* 随机数据数组 */];
            const powerConsumptionData = [];
            for (let i = 0; i < 10; i++) {
                powerConsumptionData.push(Math.random() * 10); // 生成 0 到 10 之间的随机数
            }

            const option = {
                title: {
                    text: '设备用电量'
                },
                // ECharts 图表的配置项
                xAxis: {
                    // x 轴配置
                    type: 'category',
                    data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日'], // x 轴类目数据
                },
                yAxis: {
                    // y 轴配置
                    type: 'value' // 指定 y 轴类型为数值轴
                },
                tooltip: {
                    trigger: 'axis', // 设置触发类型为坐标轴触发
                    formatter: function (params) {
                        // 格式化提示框内容
                        const value = params[0].value; // 获取数据值
                        return `数据值：${value}`; // 自定义提示框内容
                    }
                },
                series: [{
                    type: 'line',
                    smooth: true,
                    data: powerConsumptionData,
                }]
            };
            powerConsumptionChart.setOption(option);
        }
    }
}
</script>


<style scoped>
/* 样式定义 */
.vehicle-details {
  margin-top: 20px;
}

.chart-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.chart {
  width: 50%;
  height: 300px;
}

.full-width {
  width: 100%;
}

</style>
  