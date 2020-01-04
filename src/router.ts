import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	{
		path: '/',
		name: 'home',
		component: () => import('./views/Home.vue')
	},
	{
		path: '/signup',
		name: 'signup',
		component: () => import('./views/Auth/SignUp.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('./views/Auth/Login.vue')
	},
	{
		path: '/confirmSignup',
		name: 'confirmSignup',
		component: () => import('./views/Auth/ConfirmSignup.vue')
	},
	{
		path: '/familydashboard',
		name: 'familydashboard',
		component: () => import('./views/Family/FamilyHome.vue')
	},
	{
		path: '/forgotPassword',
		name: 'forgotPassword',
		component: () => import('./views/Auth/ForgotPassword.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('./views/About.vue')
	}
  ]
});
