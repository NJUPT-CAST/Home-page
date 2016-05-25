<template lang="ejs">
  <div id="main-container">
    <hexo-section></hexo-section>
    <intro-section></intro-section>
  </div>
</template>

<script>
import HexoSection from './HexoSection'
import IntroSection from './IntroSection'

export default {
  components: {
    'hexo-section': HexoSection,
    'intro-section': IntroSection
  }
}
</script>

<style lang="scss">
@import '../assets/common.scss';

#main-container {
  width: 100%;
  min-width: $min-width;
}
</style>
