<template lang="ejs">
    <div id="app-header">
        <div class="logo-wrap">
            <img src="../image/logo.gif" alt="">
        </div>
        <app-nav></app-nav>
    </div>
</template>

<script>
    var Nav = require('./Nav.vue');

    export default {
        component: { Nav },
        data() {
            return {
                msg: 'this is header component'
            }
        }
    }
</script>

<style lang="sass" scoped>
    #app-header {
        height: 40px;

        .logo-wrap {
            float: left;
            width: 120px;
            height: 40px;

            img {
                width: 100%;

            }
        }
    }
</style>
