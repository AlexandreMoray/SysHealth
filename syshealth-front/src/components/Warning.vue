<template>
    <div class="warning-container" v-if="isWarning() != 'ok'">
        <div class="message">
            {{isWarning()}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "warning",
        props: ['values'],
        methods: {
            isWarning() {
                if(this.values.airQuality > 95) {
                    return "Air Quality is quite dangerous (" + this.values.airQuality + ") !"
                } else if(this.values.humidity > 80) {
                    return "Humidity is really high (" + this.values.humidity + ") !"
                } else if(this.values.humidity < 20) {
                    return "Humidity is really low (" + this.values.humidity + ") !"
                } else if(this.values.temp > 30) {
                    return "Temperature is high (" + this.values.temperature + ") !"
                } else if(this.values.temp < 5) {
                    return "Temperature is low (" + this.values.temperature + ") !"
                } else {
                    return 'ok'
                }
            }
        }
    }
</script>

<style scoped>
    .warning-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        min-width: 500px;
        border-radius: 15px 0 15px 0;
        font-weight: bold;
        box-sizing: border-box;
        background-color: rgba(255,10,10, 0.7);
    }
</style>
