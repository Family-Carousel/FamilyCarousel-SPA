<template>
  <v-flex xs12 sm8 md4>
    <v-flex xs12>
      <router-link to="/">
        <v-img :src="require('../assets/logo.png')" class="mb-8" contain height="200"></v-img>
      </router-link>
    </v-flex>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Sign Up</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field label="email" name="email" prepend-icon="email" type="text"></v-text-field>
          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
          ></v-text-field>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'you must agree to continue!']"
            label="Do you Agree?"
            required
          ></v-checkbox>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" large>Sign Up</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card-text>
    </v-card>
    <br />
    <p align="center">
      Have an account?
      <a href="login">login</a>
    </p>
  </v-flex>
</template>

<script>
import LoginOrSignUpLayout from "../layouts/LoginOrSignupLayout";
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
      signedIn: false
    };
  },
  methods: {
    async isUserSignedIn() {
      try {
        const userObj = await Auth.currentAuthenticatedUser();
        this.signedIn = true;
        console.log(userObj);
      } catch (e) {
        this.signedIn = false;
        console.log(e);
      }
    }
  }
};
</script>