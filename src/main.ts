import 'core-js/stable'; // ie11 fix
import 'regenerator-runtime/runtime'; // ie11 fix
// import 'vue-router/types/vue'; // Typescript router not part of type fix

import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import axios from 'axios';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import VueLogger from 'vuejs-logger';
import vuelidate from 'vuelidate';
import App from './App.vue';
import awsconfig from './aws-exports';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store/store';
Amplify.configure(awsconfig);

Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(vuelidate);
Vue.use(VueLogger, {
  isEnabled: true,
  logLevel: process.env.VUE_APP_LOG_LEVEL || 'debug',
  separator: '|',
  showConsoleColors: true,
  showLogLevel: true,
  showMethodName: true,
  stringifyArguments: false

});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  created() {
    axios.interceptors.request.use(
      (config) => {
        const token = false;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  },
  // tslint:disable-next-line: object-literal-sort-keys
  render: (h) => h(App)
}).$mount('#app');
