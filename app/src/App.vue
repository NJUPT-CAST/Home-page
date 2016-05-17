<template>
  <div id="app">
    <my-nav></my-nav>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  components: {
    'my-nav': Nav
  }
}
</script>

<style lang="scss">
@import './assets/normalize.css';

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
</style>
