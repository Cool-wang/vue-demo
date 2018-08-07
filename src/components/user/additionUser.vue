<template>
<div class="additionUser_container">
    <single-bar :titles="titles.titles1" :labels="labels.labels1" :datas="datas.datas1"></single-bar>
</div>
</template>
<script>
import singleBar from '../echarts/SingleBar.vue'
    export default {
        name: 'additionUser',
        components: {
            'single-bar': singleBar
        },
        data() {
            return {
                titles: {
                    titles1: []
                },
                labels: {
                    labels1: []
                },
                datas: {
                    datas1: []
                }
            }
        },
        methods: {},
        created() {
            let title = [
                '新增用户数', '单位: 人'
            ];
            this.titles.titles1 = title;
            this.labels.labels1 = ['一月', '二月', '三月', '四月', '五月', '六月', '七月'];
            this.datas.datas1 = [25, -35, -44, 66, -77, 99, 101];
        },
        mounted() {
        }
    }
</script>
<style scoped>

</style>
