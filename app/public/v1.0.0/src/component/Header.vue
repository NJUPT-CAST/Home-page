<template lang="ejs">
    <div class="logo-wrap">
        <img src="../image/logo.gif" alt="">
    </div>
    <h1>{{ msg }}</h1>
    <app-nav></app-nav>
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

</style>
