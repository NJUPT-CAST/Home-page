<template lang="ejs">
  <div class="" id="main-container">
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

</style>
