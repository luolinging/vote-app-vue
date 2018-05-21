import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import login from '@/pages/login'
import register from '@/pages/register'
import search from '@/pages/search'
import my from '@/pages/my'
import myVoteRecord from '@/pages/myVoteRecord'
import applyJion from '@/pages/applyJion'
import playerDetail from '@/pages/playerDetail'
import resChart from '@/pages/resChart'
import settings from '@/pages/settings'
import voteRes from '@/pages/voteRes'
import modifyPwd from '@/pages/modifyPwd'
import searchRes from '@/pages/searchRes'
import userDetail from '@/pages/userDetail'
import wjpwd from '@/pages/wjpwd'

Vue.use(Router)

export default new Router({
	linkActiveClass: 'mui-active',
	mode: 'history',
	routes: [{
			path: '/',
			name:'home',
			component: home
		},
		{
			path: '/login',
			name:'login',
			component: login
		},
		{
			path: '/register',
			name:'register',
			component: register
		},
		{
			path: '/search',
			name: 'search',
			component: search
		},
		{
			path: '/searchRes',
			name: 'searchRes',
			component: searchRes
		},
		{
			path: '/my',
			name: 'my',
			component: my
		},
		{
			path: '/myVoteRecord',
			name: 'myVoteRecord',
			component: myVoteRecord
		},
		{
			path: '/applyJion',
			name: 'applyJion',
			component: applyJion
		},
		{
			path: '/playerDetail/:id',
			name: 'playerDetail',
			component: playerDetail
		},
		{
			path: '/resChart',
			name: 'resChart',
			component: resChart
		},
		{
			path: '/settings',
			name: 'settings',
			component: settings
		},
		{
			path: '/voteRes/:id',
			name: 'voteRes',
			component: voteRes
		},
		{
			path:'/modifyPwd',
			name: 'modifyPwd',
			component: modifyPwd
		},
		{
			path:'/userDetail',
			name: 'userDetail',
			component: userDetail
		},
		{
			path:'/wjpwd',
			name: 'wjpwd',
			component: wjpwd
		}
	]
})