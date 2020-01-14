<template>
  <div class="dashboard-container">
    <Warning :values="parameters.getLastValues()"/>
    <ContextData/>
    <chart name="Températures" :parameters="parameters.getChartParameters('temperatures')" type="bar"></chart>
    <chart name="Rythme Cardiaque" :parameters="parameters.getChartParameters('heart_rate')" type="line"></chart>
    <chart name="Respiration" :parameters="parameters.getChartParameters('breath')" type="area"></chart>
    <chart name="Position" :parameters="parameters.getChartParameters('position')" type="line"></chart>
  </div>
</template>

<script>
  import Chart from "./Chart";
  import { Values } from "../models/values";
  import ContextData from "./ContextData";
  import Warning from "./Warning";

  let values = new Values();

  export default {
    name: 'Dashboard',
    components: {
      Warning,
      ContextData,
      Chart
    },
    data() {
      return {
        parameters : values
      }
    }
  }
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .dashboard-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .chart {
    width: 46%;
    margin: 2%;
  }
</style>
