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
        <v-form>
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
import LoginOrSignUpLayout from '@/layouts/LoginOrSignupLayout.vue';
import { authService } from '@/services/Auth.Service';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Login'
})
export default class Login extends Vue {
  private password: string = '';
  private email: string = '';
  private signedIn: boolean = false;
  private apiRequest: boolean = false;

  public created() {
    this.$emit(`update:layout`, LoginOrSignUpLayout);
    this.isUserSignedIn();
  }

  public async isUserSignedIn(): Promise<void> {
    const authedUser = await authService.getCurrentAuthenticatedUser();

    if (authedUser) {
      this.signedIn = true;
    } else {
      this.signedIn = false;
    }
  }

  public async loginUser(): Promise<void> {
    this.apiRequest = true;

    const loggedInUser = await authService.logInUser(this.email, this.password);

    if (!loggedInUser) {
      this.$router.push({
        path: '/familypicker'
      });
    }
    this.apiRequest = false;
  }
}
</script>
