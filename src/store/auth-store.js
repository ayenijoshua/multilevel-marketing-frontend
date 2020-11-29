import actions from "./actions/auth-actions";
import mutations from "./mutations/auth-mutations";
import getters from "./getters/auth-getters";

export default {
  namespaced: true,
  state() {
    return {
      authenticated: false,
      is_admin: false
    };
  },
  actions: {
    ...actions
  },
  mutations: {
    ...mutations
  },
  getters: {
    ...getters
  }
};
