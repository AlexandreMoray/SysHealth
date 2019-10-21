<template>
  <div id="all">
    <Navbar/>
    <div class="app">
      <Dashboard/>
    </div>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Dashboard,
    Navbar
  }
}
</script>

<style>
  #all {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .app {
    width: 100vw;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
