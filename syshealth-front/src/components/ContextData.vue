<template>
    <div class="context-container">
        <div class="header">
            <h2>Informations de contexte du Patient</h2>
        </div>
        <div id="datas">
            <div class="box">
                <h3>Ville actuelle: </h3>
                <div>{{city}}</div>
            </div>
            <div class="box">
                <h3>Température extérieure: </h3>
                <div>{{temperature}}</div>
            </div>
            <div class="box">
                <h3>Qualité de l'air: </h3>
                <div>{{airQuality}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContextData",
        data () {
            return {
                temperature: 20,
                airQuality: 0.8,
                city: 'Lyon'
            }
        }
    }
</script>

<style scoped>
    .context-container {
        margin: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: cadetblue;
        border-radius: 15px;
        border: 2px solid #2c3e50;
        box-sizing: border-box;
        background-color: antiquewhite;
    }
    #datas {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .box {
        border-radius: 10px;
        padding: 8px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box div {
        margin: 5px;
    }
    .header {
        height: 40px;
        width: 100%;
        background-color: #2c3e50;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px 10px 0 0;
    }
    h2, h3 {
        margin-top: 0;
        margin-bottom: 0;
    }
</style>
