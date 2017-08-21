<template>
  <div id="app">
    <img src="./assets/worldsLogo.png">
    <router-view></router-view>
    <h3 id="disclaimer">This site is just for shits and giggles, if it offends you, take a chill pill.</h3>
  </div>
</template>

<script>
export default {
  name: 'app'
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

#disclaimer {
  bottom: 0;
  position: fixed
}
</style>
