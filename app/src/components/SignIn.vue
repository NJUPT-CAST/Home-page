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
                  <input type="text" name="stuid" value="">
                </div>
              </div>
              <div class="form-control">
                <div class="col-md-2 label-wrap">
                  <label>密码</label>
                </div>
                <div class="col-md-8">
                  <input type="password" name="password" value="">
                </div>
              </div>
              <div class="form-control">
                <div class="col-md-2 label-wrap">
                </div>
                <div class="col-md-8">
                  <button id="sign-in-btn" class="form-btn">登录</button>
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/signPanel.scss';
@import '../assets/form.scss';
</style>
