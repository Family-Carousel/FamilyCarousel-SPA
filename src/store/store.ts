import Vue from 'vue';
import Vuex from 'vuex';
// import AuthModule from './modules/auth/store.auth';
import { ISnackbarState } from './modules/snackbar/store-snackbar';

Vue.use(Vuex);

export interface IRootState {
  SnackBar: ISnackbarState;
}

export default new Vuex.Store<IRootState>({});
