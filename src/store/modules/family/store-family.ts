import { IFamilyData } from '@/interfaces/IFamilyData';
import store from '@/store/store';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

export interface IFamilyState {
  currentFamily: IFamilyData;
  familyList: IFamilyData[];
}

@Module({
  dynamic: true,
  name: 'FamilyModule',
  namespaced: true,
  store
})
class FamilyModule extends VuexModule implements IFamilyState {
  public currentFamily!: IFamilyData;
  public familyList!: IFamilyData[];

  @Action({ commit: 'SET_CURRENTFAMILY' })
  public async setCurrentFamily(familyObject: IFamilyData): Promise<IFamilyData> {
    return familyObject;
  }

  @Action({ commit: 'SET_FAMILYLIST' })
  public async setFamilyList(familyList: IFamilyData[]): Promise<IFamilyData[]> {
      return familyList;
  }

  @Mutation
  private SET_CURRENTFAMILY(familyObject) {
    this.currentFamily = familyObject;
  }

  @Mutation
  private SET_FAMILYLIST(familyList) {
      this.familyList = familyList;
  }

}

export const familyStore = getModule(FamilyModule);
