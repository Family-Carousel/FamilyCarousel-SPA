<template>
  <v-flex xs12 sm8 md4>
    <v-flex xs12>
      <router-link to="/">
        <v-img :src="require('../../assets/logo.png')" class="mb-8" contain height="200"></v-img>
      </router-link>
    </v-flex>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Register a new account</v-toolbar-title>
      </v-toolbar>
      <v-progress-linear v-if="apiRequest" :indeterminate="true" class="ma-0"></v-progress-linear>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="displayName"
            label="Display Name"
            name="username"
            prepend-icon="person"
            type="text"
          ></v-text-field>
          <v-text-field v-model="email" label="Email" name="email" prepend-icon="email" type="text"></v-text-field>
          <v-text-field
            v-model="password"
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
          ></v-text-field>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue']"
            required
            label="By signing up, I agree to Family Carousels terms of service and privacy policy"
          ></v-checkbox>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" large @click="createAccount">Create Account</v-btn>
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
      apiRequest: false,
      signedIn: false,
      displayName: "",
      email: "",
      password: "",
      checkbox: false
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
    },
    async createAccount() {
      this.apiRequest = true;
      Auth.signUp({
        username: this.email,
        password: this.password,
        attributes: {
          email: this.email,
          name: this.displayName
        },
        validationData: []
      })
        .then(data => {
          this.apiRequest = false;
          console.log(data);
          this.$router.push({
            path: "/confirmSignup",
            query: { email: this.email }
          });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>