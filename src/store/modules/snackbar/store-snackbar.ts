import { ISnackBar } from '@/interfaces/ISnackBar';
import store from '@/store/store';
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators';

export interface ISnackbarState {
  snackBars: ISnackBar[];
}

@Module({
  dynamic: true,
  name: 'SnackBarModule',
  namespaced: true,
  store
})
class SnackBarModule extends VuexModule implements ISnackbarState {
  public snackBars: ISnackBar[] = [];

  @Action({ commit: 'SET_SNACKBAR' })
  public async setSnackBar(snackBar: ISnackBar) {
    snackBar.showing = true;
    snackBar.color = snackBar.color || 'success';
    return snackBar;
  }

  @Mutation
  private SET_SNACKBAR(snackBar: ISnackBar) {
    return this.snackBars.push(snackBar);
  }
}

export const SnackBar = getModule(SnackBarModule);
