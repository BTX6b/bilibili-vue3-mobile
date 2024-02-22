<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
interface ImageType {
  link:string
  imgSrc:string
}
const images = ref<ImageType[]>([])
axios({
  method: 'get',
  url: '/swiperList'
}).then((res) => {
  console.log(res.data.result)
  images.value = res.data.result
})

</script>
<template>
<van-swipe lazy-render class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="image in images" :key="image.imgSrc">
    <img :src="image.imgSrc" />
  </van-swipe-item>
</van-swipe>
</template>
<style lang="less" scoped>
.my-swipe {
  img {
    width: 100%;
  }
}
</style>
