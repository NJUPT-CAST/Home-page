<template lang="ejs">
  <div id="footer">
    <div class="copy-right">
      Copyright (c) 2016 Copyright Holder All Rights Reserved.
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

<style lang="scss">
@import '../assets/common.scss';

$footer-height: 200px;
$footer-background-color: #333;
$legal-background-color: #111;

#footer {
  position: relative;
  min-width: $min-width;
  height: $footer-height;
  background-color: $footer-background-color;

  .copy-right {
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    width: 100%;
    padding: 20px;
    text-align: center;
    background-color: $legal-background-color;
    color: #aaa;
  }
}
</style>
