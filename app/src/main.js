import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import SignIn from './components/SignIn'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/signin': {
    component: SignIn
  }
})

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

router.start(App, '#root')
