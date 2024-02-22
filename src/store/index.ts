import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({ login: require('../assets/images/login.png') }),
  getters: {
  },
  actions: {
    changeHeadShot () {
      // console.log('数据存储成功')
      this.login = require('../assets/images/head.png')
    }
  }
})
