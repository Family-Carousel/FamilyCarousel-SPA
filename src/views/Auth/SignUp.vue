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
            @input="$v.displayName.$touch()"
            @blur="$v.displayName.$touch()"
            :error-messages="displayNameErrors"
            required
            v-model="displayName"
            label="Display Name"
            name="username"
            prepend-icon="person"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            name="email"
            prepend-icon="email"
            type="text"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            :error-messages="emailErrors"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            :error-messages="passwordErrors"
            required
          ></v-text-field>
          <v-checkbox
            v-model="userAgreement"
            @change="$v.userAgreement.$touch()"
            @blur="$v.userAgreement.$touch()"
            :error-messages="userAgreementErrors"
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
import { required, minLength, email } from "vuelidate/lib/validators";
import {
  hasNumber,
  hasLowerCaseLetter,
  hasUpperCaseLetter,
  hasSpecialCharacter
} from "../../validators/password";

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
      userAgreement: false
    };
  },
  validations: {
    displayName: { required },
    email: { required, email },
    password: {
      required,
      minLength: minLength(8),
      hasNumber,
      hasLowerCaseLetter,
      hasUpperCaseLetter,
      hasSpecialCharacter
    },
    userAgreement: {
      checked(val) {
        return val;
      }
    }
  },
  computed: {
    displayNameErrors() {
      const errors = [];
      if (!this.$v.displayName.$dirty) return errors;
      !this.$v.displayName.required && errors.push("Username is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.password.minLength &&
        errors.push("Password must be minimum of 8 characters");
      !this.$v.password.hasNumber &&
        errors.push("Password must contain a number");
      !this.$v.password.hasLowerCaseLetter &&
        errors.push("Password must contain a lower case letter");
      !this.$v.password.hasUpperCaseLetter &&
        errors.push("Password must contain a capital letter");
      !this.$v.password.hasSpecialCharacter &&
        errors.push("Password must contain a special character");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("Email is required");
      !this.$v.email.email && errors.push("You must enter a valid email");
      return errors;
    },
    userAgreementErrors() {
      const errors = [];
      if (!this.$v.userAgreement.$dirty) return errors;
      !this.$v.userAgreement.required &&
        errors.push("You must agree to continue");
      return errors;
    }
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
    async createAccount() {
      this.$v.$touch();
      if (!this.$v.$dirty) {
        this.apiRequest = true;
        Auth.signUp({
          username: this.email,
          password: this.password,
          attributes: {
            email: this.email,
            name: this.displayName
          },
          validationData: []
        }).then(() => {
          this.apiRequest = false;
          this.$router.push({
            path: "/confirmSignup",
            query: { email: this.email }
          });
        });
      }
    }
  }
};
</script>