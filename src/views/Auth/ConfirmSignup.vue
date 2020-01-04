<template>
  <v-flex xs12 sm8 md4>
    <v-flex xs12>
      <router-link to="/">
        <v-img :src="require('../../assets/logo.png')" class="mb-8" contain height="200"></v-img>
      </router-link>
    </v-flex>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Confirm Registration</v-toolbar-title>
      </v-toolbar>
      <v-progress-linear v-if="apiRequest" :indeterminate="true" class="ma-0"></v-progress-linear>
      <v-card-text>
        <v-form>
          <v-text-field :label="email" name="email" prepend-icon="email" type="text" disabled></v-text-field>
          <v-text-field
            v-model="confirmCode"
            label="Confirmation Code"
            name="confirmationCode"
            prepend-icon="lock"
            type="text"
          ></v-text-field>
          <p align="right">
            Lost your code?
            <a href="#">Resend Code</a>
          </p>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" large @click="confirmSignup">Confirm</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card-text>
    </v-card>
    <br />
    <p align="center">
      Have an account?
      <a href="login">Back to Login</a>
    </p>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import LoginOrSignUpLayout from "../../layouts/LoginOrSignupLayout.vue";
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
      email: this.$route.query.email,
      apiRequest: false,
      signedIn: false,
      confirmCode: ""
    };
  },
  methods: {
    async isUserSignedIn(): Promise<void> {
      try {
        await Auth.currentAuthenticatedUser();
        this.signedIn = true;
      } catch (e) {
        this.signedIn = false;
      }
    },
    async confirmSignup(): Promise<void> {
      Auth.confirmSignUp(this.email, this.confirmCode, {
        forceAliasCreation: true
      })
        .then(() => {
          this.$router.push({
            path: "/login"
          });
        });
    }
  }
});
</script>