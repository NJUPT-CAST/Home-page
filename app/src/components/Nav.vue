<template>
  <div id="nav-container">
    <div id="nav-background">
    </div>
    <div id="nav">
      <ul class="left-nav-menu nav-menu">
        <li v-for="item in navLeft" class="nav-menu-item">
          <a v-link="{ path: '/' + item.link }">{{ item.itemName }}</a>
        </li>
      </ul>
      <ul class="right-nav-menu nav-menu">
        <template v-if="isLog">
          <li class="nav-menu-item">
            <a
            href="javascript:void(0)"
            @mouseover="toggleMenu(true)"
            @mouseout="toggleMenu(false)"
            class="toggle-link">
              <span class="name-wrap">
                {{user.name}}
              </span>
              <span style="float:right">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
            <ul
            id="toggle-nav-menu"
            v-show="isShow"
            @mouseover="toggleMenu(true)"
            @mouseout="toggleMenu(false)">
              <li><a v-link="{ path: '/center' }">个人中心</a></li>
              <li>
                <a
                href="javascript:void(0)"
                @click="signOut">
                注销</a></li>
            </ul>
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
import { getInfo } from '../../vuex/getters'
import { infoRecorder } from '../../vuex/actions'
import CONFIG from '../../config.js'
export default {
  created: function () {
    this.$http({
      url: CONFIG.myDev.preUrl + '/users/islog',
      method: 'GET'
    })
    .then(function (response) {
      if (response.data.state === 'success') {
        this.isLog = true
        this.user = response.data.data
        this.getInfo()
      } else {
        this.isLog = false
      }
      // console.log(response)
    }, function (response) {
      this.getInfo('122')
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
        name: '123'
      },
      isShow: false
    }
  },
  methods: {
    showMenu: function (event) {
      this.isShow = true
    },
    hiddenMenu: function (event) {
      this.isShow = false
    },
    toggleMenu: function (isShow) {
      this.isShow = isShow
    },
    signOut: function (event) {
      this.$http({
        url: '/users/signout',
        method: 'GET'
      })
      .then(function (response) {
        if (response.data.state === 'success') {
          window.location.reload()
        } else {
          console.log(response.data.data)
        }
      }, function (response) {
        console.log(response)
      })
    }
  },
  vuex: {
    getters: {
      user: getInfo
    },
    actions: {
      getInfo: infoRecorder
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/common.scss';

$nav-height: 48px;
$nav-bg-color: #333;

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
  background-color: $nav-bg-color;
  opacity: 0.8;
}
#nav {
  position: absolute;;
  top: 0;
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  min-width: $min-width;

  ul {
    margin: 0;
    height: $nav-height;
  }
}

.left-nav-menu {
  float: left;
}

.right-nav-menu {
  float: right;
}

.nav-menu > li {
  position: relative;
  float: left;

  a {
    display: inline-block;
    width: 100%;
    height: $nav-height;
    line-height: $nav-height;
    box-sizing: border-box;
    padding: 0 15px;
    color: #aaa;
    font-weight: 700;
    text-align: center;
  }

  a:hover {
    color: #fff;
  }

  .toggle-link {
    .name-wrap {
      padding: 0 15px;
    }
  }
}

ul#toggle-nav-menu {
  position: absolute;
  right: 0;
  background-color: #555;
  width: 150px;
  height: auto;
  li {
    a {
      display: inline-block;
      box-sizing: border-box;
      text-align: center;
      border-left: 3px solid #fff;
    }
  }
}
</style>
