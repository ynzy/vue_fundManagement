import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Nofind from './views/404'
import Home from './views/Home.vue'
import InfoShow from './views/InfoShow.vue'
import FoundList from './views/FoundList'
import foundDetail from './views/foundDetail'

import touchdemo from './views/touchdemo.vue'
import touchdemo2 from './views/touchdemo2.vue'
import touchdemo3 from './views/touchdemo3.vue'
Vue.use(Router)

const router = new Router({
	mode: 'history', // 路由模式  // history hash
	// base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: '/index'  // 重定向
		},
		{
			path: '/index',
			name: 'index',
			component: Index,
			children: [
				{ path: '', component: Home },
				// 主页
				{ path: '/home', name: 'home', component: Home },
				// 个人信息展示
				{ path: '/infoshow', name: 'infoshow', component: InfoShow },
				// 资金流水
				{ path: '/foundlist', name: 'foundlist', component: FoundList },
				//列表详情
				{ path: '/foundDetail', name: 'foundDetail', meta: 'admin', component: foundDetail },
				// 手机滑动页
				{ path: '/touchdemo', name: 'touchdemo', component: touchdemo },
				{ path: '/touchdemo2', name: 'touchdemo2', component: touchdemo2 },
				{ path: '/touchdemo3', name: 'touchdemo3', component: touchdemo3 }
			]
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{ path: '*', name: '/404', component: Nofind }
	]
})

//路由守卫,判断token是否过期
router.beforeEach((to, from, next) => {
	//判断本地存储token是否过期
	const isLogin = localStorage.eleToken ? true : false
	if (to.path == '/login' || to.path == '/register') {
		isLogin ? next('/index') : next()
	} else {
		isLogin ? next() : next('/login')
	}
	// if (to.path == '/login' || to.path == '/register') {
	// 	next()
	// } else {
	// 	isLogin ? next() : next('/login')
	// }
})

export default router
