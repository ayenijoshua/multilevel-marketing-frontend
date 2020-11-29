//import vm from "../main";
//import { http } from "./api-config";
import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8000/api"
});

const prefix = "/auth";
const routes = {
  auth: {
    login: `${prefix}/login`,
    register: `${prefix}/register`,
    verify: `${prefix}/verify`,
    logout: `${prefix}/logout`,
    csrf: "/csrf-cookie",
    password: {
      email: `/${prefix}/email`,
      reset: `/${prefix}/reset`
    }
  }
};

export default {
  /**
   *
   * @param {*} username
   * @param {*} password
   * @param {*} cb
   */
  login(form) {
    //await this.csrf();
    return http.post(routes.auth.login, form);
        //vm.$store.commit("processed");
  },

  /**
   *
   * @param {*} data
   * @param {*} cb
   */
  register(data, cb) {
    http()
      .post(routes.register, data)
      .then(res => {
        if (res.data.success) {
          cb();
        } else {
          console.log("error");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  // email(email, cb) {
  //   http
  //     .post(routes.password.email, email)
  //     .then(res => {
  //       if (res.data.success) {
  //         cb();
  //       } else {
  //         console.log("error");
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       vm.$store.commit("processed");
  //     });
  // },

  // csrf() {
  //   http
  //     .get("http://localhost:8000/api/csrf-cookie")
  //     .then(() => {
  //       console.log("csrf-cookie obtained successfully");
  //     })
  //     .catch(err => {
  //       console.log("unable to get csrf-cookie" + err);
  //     });
  // }
};
