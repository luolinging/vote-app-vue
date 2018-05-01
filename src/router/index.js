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

Vue.use(Router)

export default new Router({
	linkActiveClass: 'mui-active',
	mode: 'history',
	routes: [{
			path: '/',
			component: home
		},
		{
			path: '/login',
			component: login
		},
		{
			path: '/register',
			component: register
		},
		{
			path: '/search',
			name: 'search',
			component: search
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
			path: '/playerDetail',
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
			path: '/voteRes',
			name: 'voteRes',
			component: voteRes
		}
	]
})