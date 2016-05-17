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
@import './assets/common.scss';

html {
  height: 100%;
}

</style>
