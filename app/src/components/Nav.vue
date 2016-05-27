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
        <template v-if="isLog">
          <li class="nav-menu-item">
            <a v-link="{ path: '/center' }">
              {{user.name}}
            </a>
          </li>
        </template>
        <template v-else>
          <li class="nav-menu-item">
            <a v-link="{ path: '/signin' }">登录</a>
          </li>
          <li class="nav-menu-item">
            <a v-link="{ path: '/signup' }">注册</a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created: function () {
    this.$http({
      url: '/users/islog',
      method: 'GET'
    })
    .then(function (response) {
      if (response.data.state === 'success') {
        this.isLog = true
        this.user = response.data.data
      } else {
        this.isLog = false
      }
      console.log(response)
    }, function (response) {
      console.log('ajax fail')
    })
  },
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
      isLog: false,
      user: {
        name: ''
      }
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
