<template ejs="ejs">
  <div class="sign-in-container panel-container">
    <div class="panel-wrap">
      <div id="sign-in-panel" class="form-panel">
        <div class="panel-head">
          <h2>登录</h2>
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
                  <label>密码</label>
                </div>
                <div class="col-md-8">
                  <input type="password" name="password" v-model="formInfo.password.value">
                </div>
              </div>
              <div class="form-control">
                <div class="col-md-2 label-wrap">
                </div>
                <div class="col-md-8">
                  <button
                  id="sign-in-btn"
                  class="form-btn"
                  @click="signIn"
                  >登录</button>
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
import CONFIG from '../../config.js'
export default {
  data () {
    return {
      formInfo: {
        stuid: {
          value: ''
        },
        password: {
          value: ''
        }
      }
    }
  },
  methods: {
    signIn: function (event) {
      let formInfo = this.formInfo
      let sendInfo = {}
      event.preventDefault()
      Object.keys(formInfo).map(
        item => {
          sendInfo[item] = formInfo[item].value
        }
      )
      this.$http.post(CONFIG.myDev.preUrl + '/users/signin', {
        data: sendInfo
      })
      .then(function (response) {
        if (response.data.state === 'success') {
          window.location.href = '/'
        } else {
          console.log(response.data.data)
        }
      }, function (response) {
        console.log('ajax fail')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/signPanel.scss';
@import '../assets/form.scss';
</style>
