<template>
  <v-flex xs12 sm8 md4>
    <div v-if="!signedIn">
    <amplify-authenticator></amplify-authenticator>
    </div>
    <div v-if="signedIn">
      <amplify-sign-out></amplify-sign-out>
    </div>
    <!-- <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Sign Up</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field label="Login" name="login" prepend-icon="person" type="text"></v-text-field>
          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">Sign Up</v-btn>
        <v-btn color="primary" to="/">Cancel</v-btn>
      </v-card-actions>
    </v-card> -->
  </v-flex>
</template>

<script>
import LoginOrSignUpLayout from "../layouts/LoginOrSignupLayout";
import { Auth } from 'aws-amplify';
import { AmplifyEventBus } from 'aws-amplify-vue';

export default {
  created() {
    this.$emit(`update:layout`, LoginOrSignUpLayout);
    this.isUserSignedIn();
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.isUserSignedIn();
      } else {
        this.signedIn = false;
      }
    });
  },
  data() {
    return {
      signedIn: false
    }
  },
  methods: {
    async isUserSignedIn() {
      try {
      const userObj = await Auth.currentAuthenticatedUser();
      this.signedIn = true;
      console.log(userObj);
      } catch (e) {
        this.signedIn = false;
        console.log(err);
      }
        
    }
  }
};
</script>