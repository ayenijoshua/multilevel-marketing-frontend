import Vue from "vue";
import Vuex from "vuex";
import authStore from "./auth-store";
import userStore from "./user-store";
//import api from "../api/auth-api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => {
    return {
      processing: false,
      loading: false,
      user: {}
    };
  },
  mutations: {
    processing(state) {
      state.processing = true;
    },
    processed(state) {
      state.processing = false;
    },
    loading(state) {
      state.loading = true;
    },
    loaded(state) {
      state.loading = false;
    },
    user(state, user){
      state.user = user;
    }
  },

  actions: {
    user({ dispatch }) {
      dispatch("userStore/user");
    }
  },

  getters: {
    user(state) {
      return state.user;
    }
  },

  modules: { authStore, userStore }
});
