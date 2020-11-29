import auth_api from "../../api/auth-api";
import vm from "../../main";

export default {
  /**
   *
   * @param {*} param0
   * @param {*} param1
   */
  login({ commit }, form) {
    commit("processing", null, { root: true });
    return auth_api.login(form).then(res => {
      console.log(res.data);
      if (res.data.success) {
        commit("authenticated", res.data);
        vm.$router.push({ name: "user-dashboard" });
        commit("processed", null, { root: true });
      } else {
        console.log("error");
      }
    });
  },

  /**
   *
   * @param {*} param0
   * @param {*} data
   */
  register({ commit }, data) {
    commit("processing", null, { root: true });
    auth_api.register(data, () => {
      commit("processed", null, { root: true });
      this.$router.push({ name: "login" });
    });
  },

  logout({ commit }) {
    commit("logout");
  }
};
