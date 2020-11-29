<template>
  <div class="page parallel">
    <div class="d-flex row">
      <div class="col-md-3 white">
        <div class="p-5 mt-5">
          <img src="../../assets/img/basic/logo.png" alt="" />
        </div>
        <div class="p-5">
          <h3>Welcome Back</h3>
          <p>
            Hey Soldier welcome back signin now there is lot of new stuff
            waiting for you
          </p>
          <form @submit.prevent>
            <div class="form-group has-icon">
              <i class="icon-envelope-o"></i>
              <input
                v-model="form.username"
                type="text"
                class="form-control form-control-lg"
                placeholder="Username"
              />
            </div>
            <div class="form-group has-icon">
              <i class="icon-user-secret"></i>
              <input
                v-model="form.password"
                type="text"
                class="form-control form-control-lg"
                placeholder="Password"
              />
            </div>
            <input
              type="submit"
              @click="submit"
              class="btn btn-primary btn-lg btn-block"
              value="Log In"
            />
          </form>
        </div>
      </div>
      <div
        class="col-md-9  height-full blue accent-3 big align-self-center text-center"
        data-bg-repeat="false"
        data-bg-possition="center"
        style="background-url : ../../assets/img/icon/icon-plane.png"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.big {
  background: url("../../assets/img/icon/icon-plane.png") #ffefe4;
}
</style>

<script>
//import Snackbar from "../../components/Snackbar";
import { mapActions, mapState } from "vuex";
//import vm from "../../main";
//import api from "../../api/auth-api";
export default {
  name: "Login",
  components: {
    //snackbar: Snackbar
  },
  data: () => ({
    valid: false,
    style: {
      backgroundUrl: "../../assets/img/icon/icon-plane.png",
      backgroundColor: "#FFEFE4"
    },
    form: {
      username: "",
      password: ""
    },
    errors: {},
    usernameRules: [v => !!v || "Username is required"],
    passwordRules: [v => !!v || "Password is required"]
  }),
  computed: {
    ...mapState({
      //authenticated: state => state.authenticated,
      processing: state => state.processing
    })
    //processing: state => state.processing
  },
  methods: {
    ...mapActions("authStore", ["login"]),

    submit() {
      // this.$store.commit("processing", null, { root: true });
      // api
      //   .login(this.form, data => {
      //     if (data.success) {
      //       //alert();
      //       this.$store.commit("authStore/authenticated", data);
      //       this.$store.commit("processed", null, { root: true });
      //       this.$router.push({ name: "user-dashboard" });
      //     } else {
      //       this.$store.commit("processed", null, { root: true });
      //      this.$router.push({ name: "user-dashboard" });
      //     }
      //   })
      this.login(this.form).catch(err => {
        //var data = JSON.stringify(err.response.data);
        if (err.response && err.response.status === 422) {
          //Object.assign(this.snackbar,{show:true,message:data.message,dark: true,color:'black'})

          this.errors = err.response.data.errors;
          console.log("error-" + JSON.stringify(err.response.data));
        } else {
          //console.log("error" + err);
          //this.snackbar.text = data.message;
        }
        this.$store.commit("processed", null, { root: true });
        //this.snackbar.show = false;
      });
    }
  },

  created() {
    //api.csrf();
  }
};
</script>
