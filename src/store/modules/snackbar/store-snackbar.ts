import store from '@/store/store';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ISnackBar } from '../../../interfaces/ISnackBar';

@Module({
  dynamic: true,
  name: 'SnackBarModule',
  namespaced: true,
  store
})
class SnackBarModule extends VuexModule {
  public snackBars: ISnackBar[] = [];

  @Action
  public async setSnackBar(snackBar: ISnackBar) {
    snackBar.showing = true;
    snackBar.color = snackBar.color || 'success';
    this.context.commit('SET_SNACKBAR', snackBar);
  }

  @Mutation
  private SET_SNACKBAR(snackBar: ISnackBar) {
    this.snackBars.concat(snackBar);
  }

}

export default getModule(SnackBarModule);
