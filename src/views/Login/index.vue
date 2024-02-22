<script setup lang="ts">
import LoginHeader from './components/Login-Header.vue'
import LoginMain from './components/Login-Main.vue'
</script>

<template>
  <LoginHeader/>
  <LoginMain/>
</template>

<style scoped>
:global(body) {
  height: 100vh;
  background: #f4f4f4;
}
</style>
