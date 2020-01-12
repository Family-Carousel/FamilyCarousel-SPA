import store from '@/store/store';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { IAuthData } from '../../../interfaces/IAuthData';

export interface IAuthState {
  currentLoggedInUserData: IAuthData;
}

@Module({
  dynamic: true,
  name: 'AuthModule',
  namespaced: true,
  store
})
class AuthModule extends VuexModule implements IAuthState {
  public currentLoggedInUserData: IAuthData;

  constructor(currentLoggedInUserData: IAuthData) {
    super(currentLoggedInUserData);
    this.currentLoggedInUserData = {};
 }

  @Action({ commit: 'SET_CURRENTUSER' })
  public async setCurrentUser(authObject: IAuthData): Promise<IAuthData> {
    return authObject;
  }

  @Mutation
  private SET_CURRENTUSER(authObject) {
    this.currentLoggedInUserData = authObject;
  }

}

export const Auth = getModule(AuthModule);
