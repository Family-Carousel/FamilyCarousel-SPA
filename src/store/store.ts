import Vue from 'vue';
import Vuex from 'vuex';
import { IAuthState } from './modules/auth/store.auth';
import { IFamilyState } from './modules/family/store-family';
import { IMemberState } from './modules/member/store-member';
import { ISnackbarState } from './modules/snackbar/store-snackbar';

Vue.use(Vuex);

export interface IRootState {
  SnackBarState: ISnackbarState;
  FamilyState: IFamilyState;
  AuthState: IAuthState;
  MemberState: IMemberState;
}

export default new Vuex.Store<IRootState>({});
