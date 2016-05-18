<template>
  <div id="app">
    <my-nav></my-nav>
    <hexo></hexo>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Hexo from './components/Hexo'

export default {
  components: {
    'my-nav': Nav,
    'hexo': Hexo
  }
}
</script>

<style lang="scss">
@import './assets/normalize.css';
@import './assets/common.scss';

html,body {
  height: 100%;
}

#app {
  height: 100%;
}

</style>
