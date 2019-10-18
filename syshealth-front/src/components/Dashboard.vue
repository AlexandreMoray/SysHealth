<template>
  <div class="hello">
    coucou Etienne
    <chart></chart>
  </div>
</template>

<script>
  import Chart from "./Chart";

  export default {
    name: 'Dashboard',
    props: {
      msg: String
    },
    components: {
      Chart
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
