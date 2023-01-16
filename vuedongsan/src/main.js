import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios; // 다른 컴포넌트에서는 import 없이 this.$axios로 사용가능
app.mount('#app')