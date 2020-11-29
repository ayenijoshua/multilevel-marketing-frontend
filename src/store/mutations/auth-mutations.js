//import vm from "../../main";
export default {
  /**
   *
   * @param {*} state
   */
  authenticating(state) {
    state.authenticated = false;
  },

  /**
   *
   * @param {*} state
   * @param {*} data
   */
  authenticated(state, { data }) {
    state.authenticated = true;
    //state.authUser = data.user;
    localStorage.setItem("token", data.access_token);
    if (state.is_admin) {
      localStorage.setItem("admin", data.admin);
    } else {
      //localStorage.setItem("user", JSON.stringify(data.user));
    }
    //vm.$http_client.defaults.headers.common.Authorization = `Bearer ${data.token}`;
  },

  /**
   *
   * @param {*} state
   */
  logout(state) {
    state.authenticated = false;
    localStorage.removeItem("token");
    if (state.is_admin) {
      state.is_admin = false;
      localStorage.removeItem("admin");
    } else {
      localStorage.removeItem("user");
    }
  }
};
