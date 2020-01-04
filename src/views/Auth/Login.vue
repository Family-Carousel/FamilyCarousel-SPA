<template>
  <v-flex xs12 sm8 md4>
    <v-flex xs12>
      <router-link to="/">
        <v-img :src="require('../../assets/logo.png')" class="mb-8" contain height="200"></v-img>
      </router-link>
    </v-flex>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-progress-linear v-if="apiRequest" :indeterminate="true" class="ma-0"></v-progress-linear>
      <v-card-text>
        <v-form >
          <v-text-field v-model="email" label="email" name="email" prepend-icon="email" type="text"></v-text-field>
          <v-text-field
            v-model="password"
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
          ></v-text-field>
          <p align="right">
            <a href="/forgotpassword">Forgot Password?</a>
          </p>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" large @click="loginUser">Login</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card-text>
    </v-card>
    <br />
    <p align="center">
      Don't have an account?
      <a href="/signup">Create account</a>
    </p>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import LoginOrSignUpLayout from "../../layouts/LoginOrSignupLayout";
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";

export default Vue.extend({
  created() {
    this.$emit(`update:layout`, LoginOrSignUpLayout);
    this.isUserSignedIn();
    AmplifyEventBus.$on("authState", info => {
      if (info === "signedIn") {
        this.isUserSignedIn();
      } else {
        this.signedIn = false;
      }
    });
  },
  data() {
    return {
      apiRequest: false,
      signedIn: false,
      email: "",
      password: ""
    };
  },
  methods: {
    async isUserSignedIn() {
      try {
        await Auth.currentAuthenticatedUser();
        this.signedIn = true;
      } catch (e) {
        this.signedIn = false;
      }
    },
    async loginUser() {
      this.apiRequest = true;
      Auth.signIn(this.email, this.password)
        .then(() => {
          this.apiRequest = false;
          this.$router.push({
            path: "/familydashboard"
          });
        });
    }
  }
});
</script>