<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
const router = useRouter()
const returnHome = () => {
  router.push('/')
}
// 3秒后自动返回主页面
onMounted(() => {
  setTimeout(() => {
    returnHome()
  }, 3000)
})
</script>

<template>
  <div class="main">
    <img
      src="http://s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/notFound.png"
      alt=""
    />
    <p>注册功能待完成中哦T_T</p>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #f4f4f4 !important;
}
.main {
  height: 100vh;
  padding-top: 26.66667vw;
  text-align: center;
  font-size: 3.46667vw;
  background: #f4f4f4;
  color: #757575;
}
</style>
