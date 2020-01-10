import store from '@/store/store';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { IAuthData } from '../../../interfaces/IAuthData';

@Module({
  dynamic: true,
  name: 'AuthModule',
  namespaced: true,
  store
})
class AuthModule extends VuexModule {
  public currentLoggedInUserData: [] = [];

  @Action
  public async setSnackBar(userObject) {
    this.context.commit('SET_CURRENTUSER', userObject);
  }

  @Mutation
  private SET_CURRENTUSER(userObject) {
    this.currentLoggedInUserData = userObject;
  }

}

export default getModule(AuthModule);
