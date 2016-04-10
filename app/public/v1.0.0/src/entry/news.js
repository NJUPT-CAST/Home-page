/**
 * Created by cuitianhao on 16/4/10.
 */
var Vue = require('vue');
var Nav = require('../component/Nav.vue');
var Header = require('../component/Header.vue');
var Footer = require('../component/Footer.vue');

require('../style/sass/news.scss');

Vue.component('app-nav', Nav);
Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

new Vue({
    el: '.body-wrap'
})