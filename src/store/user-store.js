import actions from "./actions/user-actions";
import mutations from "./mutations/user-mutations";
import getters from "./getters/user-getters";

export default {
  namespaced: true,
  state() {
    return {
      loading: false,
      users: [],
      data: {
        dashboard: {},
        profile: {},
        downlines: [],
        levels: {},
        genealogy: {},
        voucher_claim_statuses: [],
        incentive_claim_statuses: [],
        wallet: {
          summary: {},
          analysis: []
        },
        withdrawal_history: {
          all: [],
          total: 0
        },
        withdrawal_status: null,
        pending_pin_approvals: [],
        pin_purchase_history: []
      }
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
