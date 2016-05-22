<template lang="ejs">
  <div class="form" v-for="item in formData">
    <div class="form-control">
      <label class="col-md-2">{{item.name}}</label>
      <div class="col-md-8" v-if="item.isBtn">
        <button
          type={{item.type}}
          name="button"
          id={{item.idName}}
          class="form-btn">
          {{item.btnName}}
        </button>
      </div>
      <input type={{item.type}} id={{item.idName}} class="col-md-8" v-else>
    </div>
  </div>
</template>

<script>
export default {
  props: ['formData'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
$input-height: 35px;

.form {
  padding-right: 100px;

  .form-control {
    display: flex;
    margin: 10px 0;

    input {
      box-sizing: border-box;
      height: $input-height;
      border: 1px solid #eee;
      border-radius: 2px;
      padding: 0 5px;
    }

    label {
      box-sizing: border-box;
      text-align: right;
      height: $input-height;
      line-height: $input-height;
      font-size: 0.9em;
      padding-right: 20px;
    }

    .col-md-2 {
      flex: 2;
    }

    .col-md-3 {
      flex: 3;
    }

    .col-md-4 {
      flex: 4;
    }

    .col-md-6 {
      flex: 6;
    }

    .col-md-7 {
      flex: 7;
    }

    .col-md-8 {
      flex: 8;
    }

    .form-btn {
      width: 50px;
      height: 30px;
      border: 1px solid #ddd;
      border-radius: 2px;
      color: #333;
      background-color: #fff;
      font-size: .9em;
    }
  }
}
</style>
