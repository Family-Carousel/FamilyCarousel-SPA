import 'core-js/stable'; // ie11 fix
import 'regenerator-runtime/runtime'; // ie11 fix

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import awsconfig from './aws-exports';
import vuelidate from 'vuelidate';
import VueLogger from 'vuejs-logger';
import axios from 'axios';
Amplify.configure(awsconfig);

Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(vuelidate);
Vue.use(VueLogger, {
  isEnabled: true,
  logLevel: process.env.VUE_APP_LOG_LEVEL || 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  created() {
    axios.interceptors.request.use(
      config => {
        const token = false;
        
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  },
  render: h => h(App)
}).$mount('#app');
