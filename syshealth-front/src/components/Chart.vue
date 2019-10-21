<template>
    <div class="chart">
        <h3>{{ parameters.chartOptions.chart.id }}</h3>
        <apexcharts width="500" :type="type" :options="parameters.chartOptions" :series="parameters.series"></apexcharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        props: ['parameters', 'type'],
        components: {
            apexcharts: VueApexCharts,
        }
    }
</script>
