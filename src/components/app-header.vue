
<script lang="ts" setup>
</script>

<template>
  <header class="app-header">
    <!-- logo -->
    <a class="logo">
      <router-link to="/"> <i class="iconfont Navbar_logo"></i></router-link>
    </a>
    <!-- 搜索 -->
    <a class="search">
      <router-link to="/search"> <i class="iconfont ic_search_tab"></i></router-link>
    </a>

    <!-- 头像 -->
    <a class="face">
      <router-link to="/login"><img src="@/assets/images/login.png" alt="登录bilibili" /></router-link>
    </a>
    <!-- 下载按钮 -->
    <div class="down-app">
      <a
        href="https://dl.hdslb.com/mobile/fixed/bili_win/bili_win-install.exe?t=20220722&spm_id_from=333.47.b_646f776e6c6f61642d6c696e6b.9"
        >下载app</a
      >
    </div>
  </header>
</template>

<style lang="less" scoped>
.app-header {
  display: flex;
  align-items: center;
  padding: 2vw 3vw;
  background-color: #fff;
}
.logo {
  flex: 1;
  .Navbar_logo {
    color: #fb7299;
    font-size: 7.46667vw;
  }
}
.search {
  padding: 2 2vw;
  .ic_search_tab {
    color: #ccc;
    font-size: 5.86667vw;
  }
}
.face {
  padding: 0 4vw;
  img {
    width: 6.4vw;
  }
}
.down-app {
  font-size: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fb7299;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
}
</style>
