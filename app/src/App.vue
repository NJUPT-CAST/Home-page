<template lang="ejs">
  <div id="app">
    <my-nav></my-nav>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import store from '../vuex/store'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  components: {
    'my-nav': Nav,
    'my-footer': Footer
  },
  store: store
}
</script>

<style lang="scss">
@import './assets/normalize.css';
@import './assets/common.scss';
</style>
