<template ejs="ejs">
  <div class="sign-up-container panel-container">
    <div id="sign-up-panel" class="form-panel">
      <div class="panel-head">
        <h2>注册</h2>
      </div>
      <div class="panel-body">
        <validator name="validation">
          <form novalidate>
            <div class="form-control" v-for="item in formData">
              <label class="col-md-2">{{item.name}}</label>
              <div class="col-md-8" v-if="item.isBtn">
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
import Form from './Form.vue'

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
