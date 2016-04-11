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
                <button>GO&nbsp;&nbsp;EXPLORE</button>
                <app-form></app-form>
            </div>
        </div>
    </div>
</template>

<script>
    import CONFIG from '../global';
    import Form from './Form.vue'

    export default {
        components: {
            Form
        },
        data() {
            return {
                name: CONFIG.name,
                enIntro: CONFIG.enIntro,
                zhIntro: CONFIG.zhIntro
            }
        }
    }
</script>

<style lang="sass" scoped>
</style>