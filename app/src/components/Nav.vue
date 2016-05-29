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
            v-link="{ path: '/center' }"
            @mouseover="showMenu"
            @mouseout="hiddenMenu"
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
            v-show="isShow">
              <li><a href="">个人中心</a></li>
              <li><a href="">注销</a></li>
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
  background-color: #555;
  height: auto;
  li {
    a {
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      border-left: 3px solid #fff;
    }
  }
}
</style>
