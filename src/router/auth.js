import Login from "../components/auth//Login.vue";
import Register from "../components/auth/Register.vue";
import Verify from "../components/auth/Verify.vue";
import Layout from "../components/layouts/AuthLayout.vue";

const routes = [
  {
    path: "/auth",
    component: Layout,
    name: "auth-layout",
    children: [
      {
        path: "login",
        component: Login
      },
      {
        path: "register",
        component: Register
      },
      {
        path: "verify",
        component: Verify
      }
    ]
  }
];

export default routes;
