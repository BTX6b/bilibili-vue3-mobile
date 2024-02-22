<template>
  <div class="video-play">
    <video
      controls
      class="video"
      :poster="videoInfo.poster"
      :src="videoInfo.videoSrc"
    ></video>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
   interface IVideoInfo {
  author?: string
  authorIconSrc?: string
  commentCount?: number
  date?: string
  id?: string
  poster?: string
  playCount?: string
  likeCount?: string
  favCount?: string
  videoSrc?: string
  videoTitle?: string
}

defineProps({
  videoInfo: {
    type: Object as PropType<IVideoInfo>,
    required: true
  }
})
</script>

<style lang="less" scoped>
.video-play {
  background-color: #000;
  .video {
    width: 100%;
    min-height: 210px;
  }
}
</style>
