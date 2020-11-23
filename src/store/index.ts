import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "../types/store";
import AuthModule from "./auth";

Vue.use(Vuex);

const storeOptions: StoreOptions<RootState> = {
  modules: {
    auth: AuthModule,
    // Add new store modules here
  },
  strict: process.env.NODE_ENV !== "production",
};

const store = new Vuex.Store<RootState>(storeOptions);

export default store;
