import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
        component: () => import('./views/Home.vue'),
        name: 'home',
        path: '/'
    },
    {
        component: () => import('./views/Auth/SignUp.vue'),
        name: 'signup',
        path: '/signup'
    },
    {
        component: () => import('./views/Auth/Login.vue'),
        name: 'login',
        path: '/login'
    },
    {
        component: () => import('./views/Auth/ConfirmSignup.vue'),
        name: 'confirmSignup',
        path: '/confirmSignup'
    },
    {
        component: () => import('./views/Family/FamilyHome.vue'),
        name: 'familydashboard',
        path: '/familydashboard'
    },
    {
        component: () => import('./views/Family/FamilyPicker.vue'),
        name: 'familyPicker',
        path: '/familyPicker'
    },
    {
        component: () => import('./views/Auth/ForgotPassword.vue'),
        name: 'forgotPassword',
        path: '/forgotPassword'
    },
    {
        component: () => import('./views/About.vue'),
        name: 'about',
        path: '/about'
    }
  ]
});
