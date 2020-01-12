import Vue from 'vue';
import Vuex from 'vuex';
import { IAuthState } from './modules/auth/store.auth';
import { IFamilyState } from './modules/family/store-family';
import { ISnackbarState } from './modules/snackbar/store-snackbar';

Vue.use(Vuex);

export interface IRootState {
  SnackBarState: ISnackbarState;
  FamilyState: IFamilyState;
  AuthState: IAuthState;
}

export default new Vuex.Store<IRootState>({});
