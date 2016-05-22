<template ejs="ejs">
  <div class="sign-in-container panel-container">
    <div id="sign-in-panel" class="form-panel">
      <div class="panel-head">
        <h2>登录</h2>
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
          isBtn: true,
          btnName: '登录',
          idName: 'sign-in-btn',
          type: 'button'
        }
      ]
    }
  },
  components: {
    'my-form': Form
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/signPanel.scss';

</style>
