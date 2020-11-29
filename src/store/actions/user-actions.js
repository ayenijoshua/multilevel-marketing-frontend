import api from "../../api/user-api";
//import vm from "../../main";

export default {
  dashboardData({ commit }) {
    api.dashboardData().then(res => {
      //alert();
      //console.log("dash");
      if (res.data.success) {
        commit("dashboardData", res.data.data);
        commit("processed", null, { root: true });
      } else {
        console.log("error");
      }
    });
  },

  /**
   *
   * @param {*} param0
   * @param {*} param1
   */
  all({ commit }, { action }) {
    commit("loading", null, { root: true });
    return api
      .all()
      .then(res => {
        if (res.success) {
          commit("all", res.data);
          commit("processed", null, { root: true });
        } else {
          action.error;
        }
      })
      .catch(err => {
        console.log(err);
        action.exception;
      });
  },

  user({ commit }) {
    commit("loading", null, { root: true });
    return api
      .user()
      .then(res => {
        //console.log(res.data);
        if (res.data.success) {
          //console.log("res.data");
          commit("user", res.data.user, { root: true });
          commit("processed", null, { root: true });
        } else {
          console.log("res.data");
        }
      })
      .catch(err => {
        console.log(err);
        //action.exception;
      });
  },

  updateProfileDetails({ commit }, form) {
    commit("processing", null, { root: true });
    return api.update(form).then(res => {
      if (res) {
        commit("user", res.data.data, { root: true });
        commit("processed", null, { root: true });
      } else {
        console.log("error");
      }
    });
  },

  profileData({ commit }) {
    commit("loading", null, { root: true });
    api.profile().then(res => {
      if (res.data.success) {
        commit("profile", res.data.data);
        commit("loaded", null, { root: true });
      } else {
        console.log("error");
      }
    });
  },

  downlines({ commit }) {
    commit("loading", null, { root: true });
    return api.downlines().then(res => {
      if (res.data.success) {
        commit("downlines", res.data.data);
        commit("loaded", null, { root: true });
      } else {
        console.log("error");
      }
    });
  },

  levels({ commit }) {
    commit("loading", null, { root: true });
    return api.levels().then(res => {
      if (res.data.success) {
        commit("levels", res.data.data);
        commit("loaded", null, { root: true });
      } else {
        console.log("error");
      }
    });
  },

  // foodVoucherClaimStatus({ commit }, level_id) {
  //   commit("processing", null, { root: true });
  //   return api.foodVoucherClaimStatus(level_id).then(res => {
  //     if (res.data.success) {
  //       commit("voucherClaimStatuses", {
  //         level_id: level_id,
  //         status: res.data.data
  //       });
  //       commit("processed", null, { root: true });
  //       return res.data.data;
  //     } else {
  //       console.log("error");
  //     }
  //   });
  // },

  foodVoucherClaimStatuses({ commit }) {
    commit("loading", null, { root: true });
    return api.foodVoucherClaimStatuses().then(res => {
      if (res.data.success) {
        commit("voucherClaimStatuses", res.data.data);
        commit("loaded", null, { root: true });
        return res.data.data;
      } else {
        console.log("error");
      }
    });
  },

  incentiveClaimStatuses({ commit }) {
    commit("loading", null, { root: true });
    return api.incentiveClaimStatuses().then(res => {
      if (res.data.success) {
        commit("incentiveClaimStatuses", res.data.data);
        commit("loaded", null, { root: true });
        return res.data.data;
      } else {
        console.log("error");
      }
    });
  },

  walletSummary({ commit }) {
    commit("loading", null, { root: true });
    return api.walletSummary().then(res => {
      if (res.data.success) {
        commit("walletSummary", res.data.data);
        commit("loaded", null, { root: true });
        return res.data.data;
      } else {
        console.log("error");
      }
    });
  },

  walletAnalysis({ commit }, id = null) {
    commit("loading", null, { root: true });
    return api.walletAnalysis(id).then(res => {
      if (res.data.success) {
        commit("walletAnalysis", res.data.data);
        commit("loaded", null, { root: true });
        return res.data.data;
      } else {
        console.log("error");
      }
    });
  },

  withdrawalHistory({ commit }, id = null) {
    commit("loading", null, { root: true });
    return api.withdrawalHistory(id).then(res => {
      if (res.data.success) {
        commit("withdrawalHistory", res.data.data);
        commit("loaded", null, { root: true });
        return res.data.data;
      } else {
        console.log("error");
      }
    });
  },

  withdrawalStatus({ commit }) {
    commit("loading", null, { root: true });
    return api.withdrawalStatus().then(res => {
      if (res.data.success) {
        commit("withdrawalStatus", res.data.data);
        commit("loaded", null, { root: true });
        return res.data.data;
      } else {
        console.log("error");
      }
    });
  },

  pendingPinApprovals({ commit }) {
    commit("loading", null, { root: true });
    return api.pendingPinApprovals().then(res => {
      if (res.data.success) {
        commit("pendingPinApprovals", res.data.data);
        commit("loaded", null, { root: true });
        return res.data.data;
      } else {
        console.log("error");
      }
    });
  },

  pinPurchaseHistory({ commit }) {
    commit("loading", null, { root: true });
    return api.pinPurchaseHistory().then(res => {
      if (res.data.success) {
        commit("pinPurchaseHistory", res.data.data);
        commit("loaded", null, { root: true });
        return res.data.data;
      } else {
        console.log("error");
      }
    });
  }
};
