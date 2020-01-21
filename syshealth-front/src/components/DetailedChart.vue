<template>
    <div class="detailedChart">
        <div class="header">
            <h3>{{name}}</h3>
            <div class="more" @click="send()">✖</div>
        </div>
        <apexcharts width="1000" :options="parameters.chartOptions" :series="parameters.series" type="line"></apexcharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'
    export default {
        name: "DetailedChart.vue",
        props: ['parameters', 'name'],
        components: {
            apexcharts: VueApexCharts
        },
        data () {
            return {}
        },
        methods : {
            send() {
                this.$emit('unextend')
            }
        }
    }
</script>

<style scoped>
    .detailedChart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-width: 500px;
        border-radius: 15px;
        border: 2px solid #2c3e50;
        box-sizing: border-box;
        background-color: antiquewhite;
        margin-bottom: 50px;
    }
    .header {
        height: 40px;
        width: 100%;
        background-color: #2c3e50;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px 10px 0 0;
    }
    .more {
        font-size: 2em;
        float: right;
        padding-right: 10px;
        cursor: pointer;
    }
</style>
