export default {
  /**
   * get all users
   * @param {*} state
   */
  all(state) {
    return state.users;
  },

  dashboardData(state) {
    return state.data.dashboard;
  },

  profile(state) {
    return state.data.profile;
  },

  downlines(state) {
    return state.data.downlines;
  },

  levels(state) {
    return state.data.levels;
  },

  voucherClaimStatuses(state) {
    return state.data.voucher_claim_statuses;
  },

  incentiveClaimStatuses(state) {
    return state.data.incentive_claim_statuses;
  },

  walletSummary(state) {
    return state.data.wallet.summary;
  },

  walletAnalysis(state) {
    return state.data.wallet.analysis;
  },

  withdrawalHistory(state) {
    return state.data.withdrawal_history.all;
  },

  totalWithdrawals(state) {
    return state.data.withdrawal_history.total;
  },

  withdrawalStatus(state) {
    return state.data.withdrawal_status;
  },

  pendingPinApprovals(state) {
    return state.data.pending_pin_approvals;
  },

  pinPurchaseHistory(state) {
    return state.data.pin_purchase_history;
  }
};
