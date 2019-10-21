<template>
  <div class="dashboard-container">
    <div class="box">
      <chart :parameters="parameters.getChartParameters('temperatures')" type="bar"></chart>
    </div>
    <div class="box">
      <chart :parameters="parameters.getChartParameters('heart_rate')" type="line"></chart>
    </div>
    <div class="box">
      <chart :parameters="parameters.getChartParameters('breath')" type="area"></chart>
    </div>
    <div class="box">
      <chart :parameters="parameters.getChartParameters('oxygen')" type="heatmap"></chart>
    </div>
    <div class="box">
      <chart :parameters="parameters.getChartParameters('position')" type="line"></chart>
    </div>
  </div>
</template>

<script>
  import Chart from "./Chart";
  import { Values } from "../models/values";

  let values = new Values();

  export default {
    name: 'Dashboard',
    components: {
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
  .box {
    width: 50%;
  }
</style>
