import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
//import vuetify from "./plugins/vuetify";
//import api from "./api/auth-api";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/css/app.css";
import { BootstrapVue} from 'bootstrap-vue';
Vue.use(BootstrapVue);

Vue.use(Vuesax);

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  //vuetify,

  created() {
    //const userInfo = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (token) {
       //;userInfo;
      this.$store.dispatch("userStore/user");
    }
  },

  render: h => h(App)
}).$mount("#app");
