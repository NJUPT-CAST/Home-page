<template lang="ejs">
    <div id="app-nav">
        <ul>
            <li><a href=""><span>动态</span></a></li>
            <li><a href=""><span>展板</span></a></li>
            <li><a href=""><span>活动</span></a></li>
        </ul>
    </div>
</template>

<script>
//    import otherComponent from '../*.vue'
    export default {
//        components: { otherComponent },
        data() {
            return {
                msg: 'this is ejs template!'
            }
        }
    }
</script>

<style lang="sass" scoped>
    #app-nav {
        float: right;

        ul {
            li {
                float: left;
                a {
                    text-decoration: none;
                }
            }
        }
    }
</style>