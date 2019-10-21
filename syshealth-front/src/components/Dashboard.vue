<template>
  <div class="dashboard-container">
    <chart :parameters="parameters"></chart>
  </div>
</template>

<script>
  import Chart from "./Chart";
  import { Values } from "../models/values";

  let values;

  export default {
    name: 'Dashboard',
    components: {
      Chart
    },
    beforeCreate() {
      values = new Values()
    },
    data() {
      return {
        parameters : values.getChartParameters("temperatures")
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
</style>
