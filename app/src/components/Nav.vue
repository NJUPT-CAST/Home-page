<template>
  <div id="nav">
    <ul class="left-nav-menu">
      <li v-for="item in navLeft" class="nav-menu-item">
        <a href="#">{{ item.itemName }}</a>
      </li>
    </ul>
    <ul class="right-nav-menu">
      <li v-for="item in navRight">
        <a href="#">{{ item.itemName }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navLeft: [
        { itemName: '主页' },
        { itemName: '新闻' },
        { itemName: '活动' },
        { itemName: '' },
        { itemName: '' }
      ],
      navRight: [
        { itemName: '登录' },
        { itemName: '注册' },
        { itemName: '崔天昊' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .left-nav-menu {
    float: left;

    .nav-menu-item {
      float: left;
    }
  }

  .right-nav-menu {
    float: right;
    li {
      float: left;
    }
  }
</style>
