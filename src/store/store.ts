import Vue from 'vue';
import Vuex from 'vuex';
import AuthModule from './modules/auth/store.auth';
import SnackBarModule from './modules/snackbar/store-snackbar';

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    appVersion: (state) => {
      return state.packageVersion;
    }
  },
  modules: {
    AuthModule,
    SnackBarModule
  },
  state: {
    packageVersion: process.env.PACKAGE_JSON_VERSION || '0.0.0'
  }
});
