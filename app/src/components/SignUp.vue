<template ejs="ejs">
  <div class="sign-up-container panel-container">
    <div id="sign-up-panel" class="form-panel">
      <div class="panel-head">
        <h2>注册</h2>
      </div>
      <div class="panel-body">
        <validator name="validation">
          <form novalidate>
            <div class="form-control">
              <label class="col-md-2"></label>
              <div class="col-md-8">
                <input type="text" name="name" value="">
              </div>
            </div>
          </form>
        </validator>
      </div>
    </div>
    <div id="right-section">

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
