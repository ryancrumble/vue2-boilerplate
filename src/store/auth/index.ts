import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";
import * as mut from "./mutation-types";
import { AuthState } from "@/types/store";

import store from "@/store";

const name = "auth";

@Module({ name, store, namespaced: true })
export default class AuthModule extends VuexModule implements AuthState {
  // STORE DATA
  _localState: any;

  // GETTERS

  get educationalVideosAll() {
    return this._localState;
  }

  // MUTATIONS

  @Mutation
  [mut.MUTATION_NAME](data: any) {
    this._localState = data;
  }

  // ACTIONS

  @Action({ rawError: true })
  fetchRequest() {
    return {};
    // return fetchRequestFromApiService()
    //   .then((data: any) => {
    //     Promise.resolve(data);
    //   })
    //   .catch((err: any) => Promise.reject(err));
  }
}
