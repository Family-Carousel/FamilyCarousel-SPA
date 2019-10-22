<template>
  <v-flex xs12 sm8 md4>
    <v-flex xs12>
      <router-link to="/">
        <v-img :src="require('../../assets/logo.png')" class="mb-8" contain height="200"></v-img>
      </router-link>
    </v-flex>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Forgot Your Password?</v-toolbar-title>
      </v-toolbar>
      <v-progress-linear v-if="apiRequest" :indeterminate="true" class="ma-0"></v-progress-linear>
      <v-card-text>
        <v-form>
          <p>Please enter your email below:</p>
          <v-text-field label="email" name="email" prepend-icon="email" type="text"></v-text-field>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" large>Reset Password</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card-text>
    </v-card>
    <br />
    <p align="center">
      <a href="login">Back to Login</a>
    </p>
  </v-flex>
</template>

<script>
import LoginOrSignUpLayout from "../../layouts/LoginOrSignupLayout";
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";

export default {
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
      email: "email here",
      apiRequest: false,
      signedIn: false
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
    }
  }
};
</script>