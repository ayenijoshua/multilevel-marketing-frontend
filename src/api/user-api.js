import { http } from "./api-config";

const prefix = {
  user: "/user",
  admin: "/admin"
};

const routes = {
  dashboard: `${prefix.user}/dashboard`,

  all: `${prefix.admin}/users`,

  user: function(id) {
    if (id) {
      return `${prefix.admin}/users/${id}/show`;
    }
    return `${prefix.user}/show`;
  },

  update: `${prefix.user}/update`,

  delete: function(id) {
    return `${prefix.admin}/users/${id}/delete`;
  },

  profile: function(id) {
    return !id
      ? `${prefix.user}/profile`
      : `${prefix.admin}/users/${id}/profile`;
  },

  downlines: function(id) {
    return !id
      ? `${prefix.user}/downlines`
      : `${prefix.admin}/users/${id}/downlines`;
  },

  //get levels
  levels: "levels",

  /**
   * get food-vouchar statuses
   * @param {*} id - user id
   */
  foodVoucherClaimStatus: function(id) {
    return `${prefix.user}/food-voucher-claims/levels/${id}/status`;
  },

  //get food-vouchar claim statuses
  foodVoucherClaimStatuses: `${prefix.user}/food-voucher-claims/statuses`,

  //get incentive-claim statuses
  incentiveClaimStatuses: `${prefix.user}/incentive-claims/statuses`,

  /**
   * claim incentives
   * @param {*} id - user id
   */
  claimIncentives: function(id) {
    `${prefix.user}/incentives/levels/${id}/claim`;
  },

  /**
   * get wallet summary
   * @param {Number} id - user id
   */
  walletSummary: function(id) {
    return !id
      ? `${prefix.user}/wallet-summary`
      : `${prefix.admin}/users/${id}/wallet-summary`;
  },

  /**
   * get wallet analysis
   * @param {Number} id - user id
   */
  walletAnalysis: function(id) {
    return !id
      ? `${prefix.user}/wallet-analysis`
      : `${prefix.admin}/users/${id}/wallet-analysis`;
  },

  /**
   * get withdrawal history
   * @param {Number} id - user id
   * @returns {Array}  array of objects
   */
  withdrawalHistory: function(id) {
    return !id
      ? `${prefix.user}/withdrawal-history`
      : `${prefix.admin}/users/${id}/withdrawal-history`;
  },

  totalWithdrawals: function(id) {
    return !id
      ? `${prefix.user}/withdrawals/total`
      : `${prefix.admin}/users/${id}/withdrawals/total`;
  },

  withdrawalRequest: `${prefix.user}/withdrawals/request`,

  withdrawalStatus: `${prefix.user}/withdrawals/status`,

  pendingPinApprovals: `${prefix.user}/pin-registrations/pending-approvals`,

  pinPurchaseHistory: `${prefix.user}/pin-purchase-history`
};

export default {
  dashboardData() {
    return http().get(routes.dashboard);
  },

  all(query = null) {
    return http().get(routes.all + query);
  },

  user(id = null) {
    return http().get(routes.user(id));
  },

  update(form) {
    return http().put(routes.update, form);
  },

  delete(id) {
    return http().delete(routes.delete(id));
  },

  // updateProfileDetails(form){
  //   return http().put(routes.update,form)
  // }

  profile(id = null) {
    return http().get(routes.profile(id));
  },

  downlines(id = null) {
    return http().get(routes.downlines(id));
  },

  levels() {
    return http().get(routes.levels);
  },

  /**
   * food-voucher claim status
   */
  foodVoucherClaimStatus(id) {
    return http().get(routes.foodVoucherClaimStatus(id));
  },

  /**
   * food-voucher claim satuses
   */
  foodVoucherClaimStatuses() {
    return http().get(routes.foodVoucherClaimStatuses);
  },

  /**
   * incentive claim statuses
   */
  incentiveClaimStatuses() {
    return http().get(routes.incentiveClaimStatuses);
  },

  /**
   * claim incentives
   * @param {*} id - leve_id
   */
  claimIncentives(id) {
    return http().post(routes.claimIncentives(id));
  },

  /**
   * get wallet summary
   * @param {Number} id - user id
   */
  walletSummary(id = null) {
    return http().get(routes.walletSummary(id));
  },

  /**
   * get wallet analysis
   * @param {Number} id - user id
   */
  walletAnalysis(id = null) {
    return http().get(routes.walletAnalysis(id));
  },

  withdrawalHistory(id = null) {
    return http().get(routes.withdrawalHistory(id));
  },

  totalWithdrawals(id = null) {
    return http().get(routes.totalWithdrawals(id));
  },

  withdrawalRequest(data) {
    return http().post(routes.withdrawalRequest, data);
  },

  withdrawalStatus() {
    return http().get(routes.withdrawalStatus);
  },

  pendingPinApprovals() {
    return http().get(routes.pendingPinApprovals);
  },

  pinPurchaseHistory() {
    return http().get(routes.pinPurchaseHistory);
  }
};
