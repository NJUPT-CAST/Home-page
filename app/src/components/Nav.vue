<template>
  <div id="nav-container">
    <div id="nav-background">
    </div>
    <div id="nav">
      <ul class="left-nav-menu">
        <li v-for="item in navLeft" class="nav-menu-item">
          <a href="#">{{ item.itemName }}</a>
        </li>
      </ul>
      <ul class="right-nav-menu">
        <li v-for="item in navRight" class="nav-menu-item">
          <a href="#">{{ item.itemName }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navLeft: [
        { itemName: 'CAST' },
        { itemName: '主页' },
        { itemName: '新闻' },
        { itemName: '活动' },
        { itemName: '' }
      ],
      navRight: [
        {
          itemName: '登录',
          link: 'signin'
        },
        {
          itemName: '注册',
          link: 'signup'
        },
        {
          itemName: '崔天昊',
          link: 'center'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$nav-height: 48px;

#nav-background {
  position: fixed;
  top: 0;
  width: 100%;
  height: $nav-height;
  background-color: #333;
  opacity: 0.8;
}
#nav {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  padding: 0 20px;
  overflow: hidden;
  width: 100%;
}

.left-nav-menu {
  float: left;
}

.right-nav-menu {
  float: right;
}

ul li {
  float: left;

  a {
    box-sizing: border-box;
    padding: 20px 15px;
    color: #aaa;
    font-weight: 700;
  }

  a:hover {
    color: #fff;
  }
}
</style>
