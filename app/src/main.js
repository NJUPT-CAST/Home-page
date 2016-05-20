import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/signin': {
    component: SignIn
  },
  '/signup': {
    component: SignUp
  }
})

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

router.start(App, '#root')
