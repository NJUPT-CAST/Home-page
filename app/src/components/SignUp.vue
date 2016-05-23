<template ejs="ejs">
  <div class="sign-up-container panel-container">
    <div id="sign-up-panel" class="form-panel">
      <div class="panel-head">
        <h2>注册</h2>
      </div>
      <div class="panel-body">
        <my-form
          :form-data="formData"
        ></my-form>
      </div>
    </div>
    <div id="right-section">

    </div>
  </div>
</template>

<script>
import Form from './Form.vue'

export default {
  data () {
    return {
      formData: [
        {
          name: '姓名',
          idName: 'name',
          type: 'text'
        },
        {
          name: '学号',
          idName: 'stu-id',
          type: 'text'
        },
        {
          name: '密码',
          idName: 'password',
          type: 'password'
        },
        {
          name: '确认密码',
          idName: 're-password',
          type: 'password'
        },
        {
          isBtn: true,
          btnName: '注册',
          idName: 'sign-up-btn',
          type: 'button'
        }
      ]
    }
  },
  components: {
    'my-form': Form
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/signPanel.scss';

</style>
