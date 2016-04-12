<template lang="ejs">
    <div id="index-container">
        <div class="intro-wrap">
            <div class="intro-header">
                <h1>
                    <span v-for="word in name">
                        {{ word }}
                    </span>
                </h1>
            </div>
            <div class="intro-details">
                <p class="english">
                    {{ enIntro }}
                </p>
                <p class="chinese">
                    {{ zhIntro }}
                </p>
            </div>
            <div class="entry-btn">
                <app-btn @click="toggleFormShow" btn-name="GO&nbsp;&nbsp;EXPLORE"></app-btn>
            </div>
        </div>
        <app-form v-if="isFormShow" @click="toggleFormShow"></app-form>
    </div>
</template>

<script>
    //components
    import CONFIG from '../global';
    import Form from './Form.vue';
    import Button from './Button.vue';

    //common getters
    import { isFormShow } from '../store/getters'

    //actions
    import { toggleFormShow } from '../store/action'

    export default {
        components: {
            'app-btn': Button,
            'app-form': Form
        },
        data() {
            return {
                name: CONFIG.name,
                enIntro: CONFIG.enIntro,
                zhIntro: CONFIG.zhIntro
            }
        },
        vuex: {
            getters: {
                isFormShow: isFormShow
            },
            actions: {
                toggleFormShow
            }
        }

    }
</script>

<style lang="sass" scoped>
</style>