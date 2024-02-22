import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/base.less'
import './assets/styles/iconfont.less'
// 全局引入组件样式
import 'vant/lib/index.css'
import { Tab, Tabs, Swipe, SwipeItem, Form, Field, CellGroup, Button, Col, Row, Search } from 'vant'

// 导入mock
import '@/mock/index.ts'

import { createPinia } from 'pinia'
const app = createApp(App).use(createPinia())
app.use(router)
app.mount('#app')
app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(Button)
app.use(Col)
app.use(Row)
app.use(Search)
