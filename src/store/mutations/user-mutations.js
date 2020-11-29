export default {
  /**
   *
   * @param {*} state
   */
  all(state, users) {
    state.users = users;
  },

  dashboardData(state, data) {
    state.data.dashboard = data;
  },

  profile(state, data) {
    state.data.profile = data;
  },

  downlines(state, data) {
    state.data.downlines = data;
  },

  levels(state, data) {
    state.data.levels = data;
  },

  voucherClaimStatus(state, data) {
    state.data.voucher_claim_statuses.push(data);
  },

  voucherClaimStatuses(state, data) {
    state.data.voucher_claim_statuses = data;
  },

  incentiveClaimStatuses(state, data) {
    state.data.incentive_claim_statuses = data;
  },

  walletSummary(state, data) {
    state.data.wallet.summary = data;
  },

  walletAnalysis(state, data) {
    state.data.wallet.analysis = data;
  },

  withdrawalHistory(state, data) {
    data.withdrawals.data.length > 0
      ? state.data.withdrawal_history.all.push(data.withdrawals.data)
      : "";
    state.data.withdrawal_history.total = data.total_withdrawals;
  },

  totalWithrawals(state, data) {
    state.data.withdrawal_history.total = data.total_withdrawals;
  },

  withdrawalStatus(state, data) {
    state.data.withdrawal_status = data;
  },

  pendingPinApprovals(state, data) {
    data.length > 0 ? state.data.pending_pin_approvals.push(data) : "";
  },

  pinPurchaseHistory(state, data) {
    data.length > 0 ? state.data.pin_purchase_history.push(data) : "";
  }

};
