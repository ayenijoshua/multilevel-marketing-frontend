<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <v-img
        :src="require('../../assets/logo.svg')"
        class="my-3"
        contain
        height="100"
      />
    </v-col>
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn :href="source" icon large target="_blank" v-on="on">
                <v-icon>mdi-code-tags</v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </v-toolbar>
        <v-card-text>
          <v-form v-model="valid" @submit.prevent>
            <v-text-field
              label="Username"
              v-model="username"
              prepend-icon="mdi-account"
              type="text"
              required
              :rules="usernameRules"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              v-model="password"
              prepend-icon="mdi-lock"
              type="password"
              required
              :rules="passwordRules"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submit">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    valid: false,
    username: "",
    password: "",
    usernameRules: [v => !!v || "Username is required"],
    passwordRules: [v => !!v || "Password is required"]
  }),
  methods: {
    submit() {}
  }
};
</script>
