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
    $link-height: 40px;

    #app-nav {
        float: right;

        ul {
            overflow: hidden;

            li {
                float: left;

                a {
                    display: inline-block;
                    color: #000;
                    text-decoration: none;

                    span {
                        display: inline-block;
                        width: 40px;
                        height: $link-height;
                        line-height: $link-height;
                        text-align: center;
                        font-weight: 700;
                        color: #333;
                        margin: 0 20px;
                    }
                }

                a:hover {
                    border-bottom: 2px solid black;
                }
            }
        }
    }
</style>