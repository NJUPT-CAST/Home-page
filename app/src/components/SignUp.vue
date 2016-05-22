<template ejs="ejs">
  <div class="sign-up-container">
    <div id="sign-up-panel">
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
          name: '验证码',
          idName: 'code',
          type: 'text'
        },
        {
          isBtn: true,
          btnName: '注册',
          idName: 'sign-up-btn',
          type: 'button'
        }
      ],
      msg: 'this is SignUp component'
    }
  },
  components: {
    'my-form': Form
  }
}
</script>

<style lang="scss">

.sign-up-container {
  display: flex;
  width: 1000px;
  min-width: 500px;
  padding: 30px;
  margin: 0 auto;

  #sign-up-panel {
    flex: 7;
    border-radius: 2px;
    border: 1px solid #aaa;
    overflow: hidden;
    margin-right: 20px;

    .panel-head {
      width: 100%;
      border-bottom: 1px solid #eee;
      h2 {
        margin: 0;
        padding: 10px;
        font-size: 1em;
        color: #999;
      }
    }

    .panel-body {
      padding: 20px 50px 20px 0;
    }

  }

  #right-section {
    flex: 3;
    width: 300px;
    border: 1px solid #aaa;
    border-radius: 2px;
  }
}

</style>
