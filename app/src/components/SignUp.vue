<template ejs="ejs">
  <div class="sign-up-container panel-container">
    <div class="panel-wrap">
      <div id="sign-up-panel" class="form-panel">
        <div class="panel-head">
          <h2>注册</h2>
        </div>
        <div class="panel-body">
          <validator name="validation">
            <form novalidate>
              <div class="form-control">
                <div class="col-md-2 label-wrap">
                  <label>学号</label>
                </div>
                <div class="col-md-8">
                  <input type="text" name="stuid" v-model="formInfo.stuid.value">
                </div>
              </div>
              <div class="form-control">
                <div class="col-md-2 label-wrap">
                  <label>姓名</label>
                </div>
                <div class="col-md-8">
                  <input type="text" name="name" v-model="formInfo.name.value">
                </div>
              </div>
              <div class="form-control">
                <div class="col-md-2 label-wrap">
                  <label>密码</label>
                </div>
                <div class="col-md-8">
                  <input type="password" name="password" v-model="formInfo.password.value">
                </div>
              </div>
              <div class="form-control">
                <div class="col-md-2 label-wrap">
                  <label>重复密码</label>
                </div>
                <div class="col-md-8">
                  <input type="password" name="repassword" v-model="formInfo.repassword.value">
                </div>
              </div>
              <div class="form-control">
                <div class="col-md-2 label-wrap">
                  <label>验证码</label>
                </div>
                <div class="col-md-8">
                  <input type="text" name="code" v-model="formInfo.code.value">
                </div>
              </div>
              <div class="form-control">
                <div class="col-md-2 label-wrap">
                </div>
                <div class="col-md-8">
                  <button
                  id="sign-up-btn"
                  class="form-btn"
                  @click="signUp"
                  >注册</button>
                </div>
              </div>
            </form>
          </validator>
        </div>
      </div>
      <div id="right-section">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //format of data
      formInfo: {
        stuid: {
          value: ''
        },
        name: {
          value: ''
        },
        password: {
          value: ''
        },
        repassword: {
          value: ''
        },
        code: {
          value: ''
        }
      }

    }
  },
  methods: {
    signUp: function (event) {
      let formInfo = this.formInfo
      let tempInfo = {}
      let sendInfo = {}
      event.preventDefault()
      Object.keys(formInfo).map(
        item => {
          tempInfo[item] = formInfo[item].value
        }
      )
      // pass repassword
      if (tempInfo.password === tempInfo.repassword) {
        Object.keys(tempInfo).map(
          item => {
            if (item !== 'repassword') {
              sendInfo[item] = tempInfo[item]
            }
          }
        )
        console.log(sendInfo)
        this.$http({
          url: '/users/add',
          method: 'POST',
          data: sendInfo
        })
        .then(function (response) {
          console.log(response)
        }, function (response) {
          console.log(response)
        })
      // not pass repassword
      } else {
        console.log('two passwords different')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/signPanel.scss';
@import '../assets/form.scss';
</style>
