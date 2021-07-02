import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './http'

// 路由相关逻辑
import router from './router'
import store from './store'

import './filters' // 加载过滤器

import 'vue-orgchart/dist/style.min.css'

Vue.use(ElementUI)
Vue.prototype.$axios = axios // axios配置在了vue的原型上
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
