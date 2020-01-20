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
    width: auto;
    text-align: center;
    color: #2c3e50;
    padding: 60px 10vw 0 10vw;
    background-size: 50px;
    background-image: url('assets/fond.jpg');
    background-size: cover;

  }
</style>
