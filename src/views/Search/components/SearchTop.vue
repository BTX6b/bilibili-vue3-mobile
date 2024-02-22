
<script setup lang="ts">
import { ref } from 'vue'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
const value = ref('')
const onSearch = () => {
  Toast('暂时不能搜索内容T_T')
  router.push('/')
}
const onCancel = () => {
  router.push('/')
}
</script>

<template>
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
</template>

<style scoped>
::v-deep .van-search__action {
  color: #fb72a6;
}
</style>
