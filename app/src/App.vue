<template>
  <div id="app">
    <my-nav></my-nav>
    <hexo-section></hexo-section>
    <intro-section></intro-section>
  </div>
</template>

<script>
import Nav from './components/Nav'
import HexoSection from './components/HexoSection'
import IntroSection from './components/IntroSection'

export default {
  components: {
    'my-nav': Nav,
    'hexo-section': HexoSection,
    'intro-section': IntroSection
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
