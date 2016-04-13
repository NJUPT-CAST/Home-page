<template lang="ejs">
    <div class="form-component-wrap">
        <div id="form-bg-cover" @click="toggleFormShow"></div>
        <div id="form-wrap">
            <form>
                <div class="form-control">

                </div>
            </form>
        </div>
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
            actions: {
                toggleFormShow
            }
        }
    }
</script>

<style lang="sass" scoped>
    $form-width: 500px;
    $form-height: 600px;

    $form-bg-color: #fff;
    $form-border-radius: 10px;

    .form-component-wrap {

        #form-bg-cover {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #333;
            opacity: 0.7;
        }

        #form-wrap {
            form {
                position: absolute;
                top: 50%;
                left: 50%;
                width: $form-width;
                height: $form-height;
                margin-left: -$form-width/2;
                margin-top: -$form-height/2;
                background-color: $form-bg-color;
                -webkit-border-radius: $form-border-radius;
                -moz-border-radius: $form-border-radius;
                border-radius: $form-border-radius;
            }
        }



    }


</style>