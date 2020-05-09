import Vue from 'vue';
import Vuex from 'vuex';
import {
  createModule,
  extractVuexModule,
  createProxy,
  mutation,
} from 'vuex-class-component';
import { Wallet } from '../types';

Vue.use(Vuex);

const VuexModule = createModule();

class PayStoreModule extends VuexModule {
  private testData = 'Test data';

  private wallets: Wallet[] = [];

  get getTestData(): string {
    return this.testData;
  }

  @mutation setWallets(wallets: Wallet[]) {
    this.wallets = wallets;
  }
}

const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(PayStoreModule),
  },
});

export default store;
// eslint-disable-next-line
const vxm = {
  user: createProxy(store, PayStoreModule),
};
