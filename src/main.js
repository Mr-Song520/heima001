import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'// 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import '../src/styles/index.less'

Vue.use(ElementUI)// 全局注册Elementui

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
