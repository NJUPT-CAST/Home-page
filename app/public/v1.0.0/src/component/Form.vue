<template lang="ejs">
    <div id="form-bg-cover">
        <form>

        </form>
    </div>
</template>

<script>
    //component
    import Cover from './Cover.vue'

    //actions
    import { toggleFormShow } from '../store/action'

    export default {
        components: {
            'app-cover': Cover
        },
        vuex: {
            action: {
                toggleFormShow
            }
        }
    }
</script>

<style lang="sass" scoped>
    $form-width: 300px;
    $form-height: 400px;

    #form-bg-cover {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #333;
        opacity: 0.7;
    }
</style>