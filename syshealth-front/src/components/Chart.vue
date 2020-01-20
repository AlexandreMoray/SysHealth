<template>
    <div class="chart">
        <div class="header">
            <h3>{{name}}</h3>
            <div class="more" v-on:click="extend()">+</div>
        </div>
        <apexcharts width="500" :type="type" :options="parameters.chartOptions" :series="parameters.series"></apexcharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'
    export default {
        props: ['parameters', 'type', 'name'],
        components: {
            apexcharts: VueApexCharts,
        },
        methods: {
            extend() {
                this.$emit('extend', this.name);
            }
        }
    }
</script>

<style>
    .chart {
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
    h3 {
        margin: 0;
        padding-left: 20px;
    }
</style>
