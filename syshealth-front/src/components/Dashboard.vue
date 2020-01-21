<template>
  <div class="dashboard-container">
    <Warning :values="parameters.getLastValues()"/>
    <ContextData/>
    <chart name="Air quality" :parameters="parameters.getChartParameters('airQuality')" type="area"
           v-if="extended==null"></chart>
    <chart name="Humidity" :parameters="parameters.getChartParameters('humidity')" type="line"
           v-if="extended==null" ></chart>
    <chart name="PmTen" :parameters="parameters.getChartParameters('pmTen')" type="area"
           v-if="extended==null" ></chart>
    <chart name="PmTwoFive" :parameters="parameters.getChartParameters('pmTwoFive')" type="area"
           v-if="extended==null" ></chart>
    <chart name="Temp" :parameters="parameters.getChartParameters('temp')" type="line"
           v-if="extended==null" ></chart>
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
        parameters : values,
        loaded: false,
        extended : null,
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
