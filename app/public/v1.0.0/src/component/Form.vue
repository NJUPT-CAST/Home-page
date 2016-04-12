<template lang="ejs">
    <div id="form-bg-cover">
        <h1>{{ isFormShow }}</h1>
    </div>
</template>

<script>
    export default {
        props: ['isFormShow'],
        data() {
            return {
                msg: "this is form component"
            }
        },
        methods: {

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