var Vue = require('vue');
var IndexMain = require('../component/IndexMain.vue');

require('../style/sass/index.scss');

new Vue({
    el: 'body',
    components: {
        'index-main': IndexMain
    }
})