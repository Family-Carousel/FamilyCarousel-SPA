import { IMemberData } from '@/interfaces/IMemberData';
import store from '@/store/store';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

export interface IMemberState {
    currentMember: IMemberData;
}

@Module({
    dynamic: true,
    name: 'MemberModule',
    namespaced: true,
    store
})
class MemberModule extends VuexModule implements IMemberState {
    public currentMember!: IMemberData;

    @Action({ commit: 'SET_CURRENTMEMBER' })
    public async setCurrentMember(memberObject: IMemberData): Promise<IMemberData> {
        return memberObject;
    }

    @Mutation
    private SET_CURRENTMEMBER(memberObject) {
        this.currentMember = memberObject;
    }
}

export const memberStore = getModule(MemberModule);
