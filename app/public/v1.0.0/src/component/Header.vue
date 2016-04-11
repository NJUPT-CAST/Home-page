<template lang="ejs">
    <div id="app-header">
        <div class="logo-wrap">
            <a href="/src/html/index.html"><img src="../image/logo.gif" alt="">
            </a>
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
        width: 80%;
        min-width: 1000px;
        height: 40px;
        margin: 0 auto;
        padding: 30px 0;

        .logo-wrap {
            float: left;
            width: 120px;
            height: 40px;
            cursor: pointer;

            img {
                width: 100%;
            }
        }
    }
</style>
