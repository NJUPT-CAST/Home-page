<template>
  <div id="nav-container">
    <div id="nav-background">
    </div>
    <div id="nav">
      <ul class="left-nav-menu">
        <li v-for="item in navLeft" class="nav-menu-item">
          <a v-link="{ path: '/' + item.link }">{{ item.itemName }}</a>
        </li>
      </ul>
      <ul class="right-nav-menu">
        <li v-for="item in navRight" class="nav-menu-item">
          <a v-link="{ path: '/' + item.link }">{{ item.itemName }}</a>
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
        {
          itemName: 'CAST',
          link: '/'
        },
        {
          itemName: '主页',
          link: '/'
        },
        {
          itemName: '新闻',
          link: 'news'
        },
        {
          itemName: '活动',
          link: 'activity'
        },
        {
          itemName: ''
        }
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
          itemName: '小明',
          link: 'center'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/common.scss';

$nav-height: 48px;

#nav-container {
  position: relative;
  width: 100%;
  height: $nav-height;
}

#nav-background {
  position: absolute;
  top: 0;
  width: 100%;
  min-width: $min-width;
  height: $nav-height;
  background-color: #333;
  opacity: 0.8;
}
#nav {
  position: absolute;;
  top: 0;
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  min-width: $min-width;
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
