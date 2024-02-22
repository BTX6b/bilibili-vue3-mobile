<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
const active = ref(0)
// 请求列表数据
interface navList {
  id: string,
  text: string
}
const list = ref<navList[]>([])
axios({
  method: 'get',
  url: '/navList'
}).then((res) => {
  // console.log(res.data.result)
  list.value = res.data.result
})

</script>
<template>
 <van-tabs v-model:active="active">
  <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
</van-tabs>
</template>
