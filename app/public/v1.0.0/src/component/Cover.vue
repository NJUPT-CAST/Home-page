<template lang="ejs">
    <div id="app-cover" :style="styleObject"></div>
</template>

<style lang="sass" scoped>
    #app-cover {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
</style>

<script>
    export default{
        data() {
            return {
                styleObject: {
                    'background-color': '#333',
                    'opacity': 0.7
                }
            }
        }
    }
</script>