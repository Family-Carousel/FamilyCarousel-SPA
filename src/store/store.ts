import Vue from 'vue';
import Vuex from 'vuex';
import snackbar from './modules/snackbar/store-snackbar';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    snackbar
  },
  state: {
    packageVersion: process.env.PACKAGE_JSON_VERSION || '0.0.0'
  },
  getters: {
    appVersion: state => {
      return state.packageVersion;
    }
  }
});
