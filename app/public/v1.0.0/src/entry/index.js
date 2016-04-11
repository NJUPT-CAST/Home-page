var Vue = require('vue');
var VueValidator = require('vue-validator');
var Form = require('../component/Form.vue');
var IndexMain = require('../component/IndexMain.vue');

require('../style/sass/index.scss');

Vue.use(VueValidator);

new Vue({
    el: 'body',
    components: {
        'app-form': Form,
        'index-main': IndexMain
    }
})