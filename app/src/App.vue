<template>
  <div id="app">
    <my-nav></my-nav>
    <div class="" id="main-container">
      <hexo-section></hexo-section>
      <intro-section></intro-section>
    </div>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Nav from './components/Nav'
import HexoSection from './components/HexoSection'
import IntroSection from './components/IntroSection'
import Footer from './components/Footer'

export default {
  components: {
    'my-nav': Nav,
    'hexo-section': HexoSection,
    'intro-section': IntroSection,
    'my-footer': Footer
  }
}
</script>

<style lang="scss">
@import './assets/normalize.css';
@import './assets/common.scss';

html,body {

}

#app {

  #main-container {

  }
}

.clear {
  clear: both;
}

</style>
