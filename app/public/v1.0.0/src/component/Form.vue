<template lang="ejs">
    <div id="form-bg-cover" @click="formHide">
        <h1>{{ formShow }}</h1>
    </div>
</template>

<script>
    export default {
        props: ['formShow'],
        data() {
            return {
                msg: "this is form component"
            }
        },
        methods: {
            formHide: function(event){
                alert(1);
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
        background-color: red;
    }
</style>