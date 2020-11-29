import axios from "axios";
import vm from "../main";

const http_client = axios.create({
  baseURL: "http://localhost:8000/api"
  //baseURL: process.env.baseURL
});
let api = function() {
  let token = localStorage.getItem("token");
  if (token) {
    http_client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return http_client;
};

//api.defaults.withCredentials = true;
api().interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401 || error.response.status === 403) {
      vm.$store.dispatch("authStore/logout");
    }
    return Promise.reject(error);
  }
);

export const http = api;

const api_prefix = {
  admin: "/admin",
  user: "/user",
  auth: "/auth"
  //verify: "/verify"
};

export const routes = {
  auth: {
    login: `${api_prefix.auth}/login`,
    register: `/${api_prefix.auth}/register`,
    verify: `/${api_prefix.auth}/verify`,
    logout: `/${api_prefix.auth}/logout`,
    csrf: "/csrf-cookie",
    password: {
      email: `/${api_prefix.auth}/email`,
      reset: `/${api_prefix.auth}/reset`
    }
  },
  user: {
    dashboard: `${api_prefix.user}/dashboard`
  }
};
