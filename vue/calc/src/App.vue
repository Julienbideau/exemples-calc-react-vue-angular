<template>
  <div id="app">
    <h1> Ma super appli en VueJs</h1>
    <Calc/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Calc from './components/calc/Calc'

export default {
  name: 'App',
  components: {
    Calc
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
