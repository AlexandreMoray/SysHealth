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
                if(this.values.temperature > 38) {
                    return "Temperature is high !"
                } else if(this.values.temperature < 36) {
                    return "Temperature is low !"
                } else if(this.values.heart_rate > 110) {
                    return "Heart rate is high !"
                } else if(this.values.heart_rate < 50) {
                    return "Heart rate is low !"
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
        border-radius: 15px;
        border: 2px solid #2c3e50;
        font-weight: bold;
        box-sizing: border-box;
        background-color: rgba(255,10,10, 0.7);
    }
</style>
