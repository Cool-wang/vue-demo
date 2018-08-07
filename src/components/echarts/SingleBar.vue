<template>
    <div class="singleBar_container">

    </div>
</template>

<script>
import echarts from 'echarts';
    export default {
        name: 'SingleBar',
        props:{
            titles: {
                type: Array,
                default: []
            },
            labels: {
                type: Array,
                default: []
            },
            datas: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                chart: ''
            }
        },
        methods: {
            initCharts() {
                this.chart = echarts.init(this.$el);
            },
            setOption() {
                let title = [
                    {
                        text: this.titles[0],
                        x: 'center'
                    },
                    {
                        text: this.titles[1],
                        x: 'right',
                        y: 20
                    }
                ];
                let series = [{
                    type: 'bar',
                    data: this.datas,
                    barMaxWidth: this.datas.length > 5 ? 50 : 50
                }];
                let option = {
                    title : title,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    label: {
                        show: true,
                        position: 'top'
                    },
                    xAxis: {
                        data: this.labels
                    },
                    yAxis: {},
                    // legend: {},
                    series: series
                }
                this.chart.setOption(option);
            }
        },
        created() {
        },
        mounted() {
            if (!this.chart) {
                this.initCharts();
                this.setOption();
            }
        }
    }
</script>
<style scoped>
.singleBar_container {
    width: 100%;
    height: 600px;
}
</style>






