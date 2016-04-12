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
                <app-btn @click="formToggle" btn-name="GO&nbsp;&nbsp;EXPLORE"></app-btn>
            </div>
        </div>
        <app-form v-if="formShow"></app-form>
    </div>
</template>

<script>
    import CONFIG from '../global';
    import Form from './Form.vue';
    import Button from './Button.vue';


    export default {
        components: {
            'app-btn': Button,
            'app-form': Form
        },
        data() {
            return {
                name: CONFIG.name,
                enIntro: CONFIG.enIntro,
                zhIntro: CONFIG.zhIntro,
                formShow: false
            }
        },
        methods: {
            formToggle: function(event){
                event.preventDefault();
                this.formShow = true;
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>