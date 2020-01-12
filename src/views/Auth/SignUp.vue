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
            :error="$v.displayName.$anyDirty && $v.displayName.$invalid"
            required
            v-model="displayName"
            label="Display Name"
            name="username"
            prepend-icon="person"
            type="text"
            bottom-slots
          >
            <template v-slot:error>
              <span
                v-if="!$v.displayName.required"
                v-text="$t('global.messages.validate.displayName.required')"
              >Your username is required.</span>
            </template>
          </v-text-field>
          <v-text-field
            v-model="email"
            label="Email"
            name="email"
            prepend-icon="email"
            type="text"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            :error="$v.email.$anyDirty && $v.email.$invalid"
            required
            bottom-slots
          >
            <template v-slot:error>
              <span
                v-if="!$v.email.required"
                v-text="$t('global.messages.validate.email.required')"
              >Your username is required.</span>
              <span
                v-if="!$v.email.email"
                v-text="$t('global.messages.validate.email.email')"
              >Please enter a valid email address.</span>
            </template>
          </v-text-field>
          <v-text-field
            v-model="password"
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            :error="$v.password.$anyDirty && $v.password.$invalid"
            required
            bottom-slots
          >
            <template v-slot:error>
              <span
                v-if="!$v.password.required"
                v-text="$t('global.messages.validate.password.required')"
              >Your password is required.</span>
              <span
                v-if="!$v.password.minLength"
                v-text="$t('global.messages.validate.password.minLength')"
              >Password must be a minimum of 8 characters.</span>
              <span
                v-if="!$v.password.hasNumber"
                v-text="$t('global.messages.validate.password.hasNumber')"
              >Password must contain a number.</span>
              <span
                v-if="!$v.password.hasLowerCaseLetter"
                v-text="$t('global.messages.validate.password.hasLowerCaseLetter')"
              >Password must contain a lower case letter.</span>
              <span
                v-if="!$v.password.hasUpperCaseLetter"
                v-text="$t('global.messages.validate.password.hasUpperCaseLetter')"
              >Password must contain a upper case letter.</span>
              <span
                v-if="!$v.password.hasSpecialCharacter"
                v-text="$t('global.messages.validate.password.hasSpecialCharacter')"
              >Password must contain a special character.</span>
            </template>
          </v-text-field>
          <v-checkbox
            v-model="userAgreement"
            @change="$v.userAgreement.$touch()"
            @blur="$v.userAgreement.$touch()"
            :error="$v.userAgreement.$anyDirty && $v.userAgreement.$invalid"
            :rules="[v => !!v || 'You must agree to continue']"
            required
            label="I agree to Family Carousels terms and privacy policy"
            bottom-slots
          >
            <template v-slot:error>
              <span
                v-if="!$v.userAgreement.required"
                v-text="$t('global.messages.validate.userAgreement.required')"
              >You must agree to continue.</span>
            </template>
          </v-checkbox>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" :disabled="$v.$invalid" large @click="createAccount">Create Account</v-btn>
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

<script lang="ts">
import LoginOrSignUpLayout from '@/layouts/LoginOrSignupLayout.vue';
import { SnackBar } from '@/store/modules/snackbar/store-snackbar';
import {
  hasLowerCaseLetter,
  hasNumber,
  hasSpecialCharacter,
  hasUpperCaseLetter
} from '@/validators/password';
import { Auth } from 'aws-amplify';
import { AmplifyEventBus } from 'aws-amplify-vue';
import { Component, Vue } from 'vue-property-decorator';
import { validationMixin } from 'vuelidate';
import { Validate, Validations } from 'vuelidate-property-decorators';
import { email, minLength, required } from 'vuelidate/lib/validators';

@Component({
  mixins: [validationMixin],
  name: 'SignUp'
})
export default class SignUp extends Vue {
  public error: string | null = '';
  private apiRequest: boolean = false;
  private signedIn: boolean = false;

  @Validate({
    checked(val) {
      return val;
    }
  })
  private userAgreement: boolean = false;

  @Validate({ required })
  private displayName: string = '';

  @Validate({ required, email })
  private email: string = '';

  @Validate({
    required,
    minLength: minLength(8),
    hasNumber,
    hasLowerCaseLetter,
    hasUpperCaseLetter,
    hasSpecialCharacter
  })
  private password: string = '';

  public created(): void {
    this.$emit(`update:layout`, LoginOrSignUpLayout);
    this.isUserSignedIn();
    AmplifyEventBus.$on('authState', (info) => {
      if (info === 'signedIn') {
        this.isUserSignedIn();
      } else {
        this.signedIn = false;
      }
    });
  }

  public async isUserSignedIn(): Promise<void> {
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.signedIn = true;
    } catch (e) {
      this.signedIn = false;
    }
  }

  public async createAccount(): Promise<void> {
    let object;
    this.apiRequest = true;
    object = Auth.signUp({
      attributes: {
        email: this.email,
        name: this.displayName
      },
      password: this.password,
      username: this.email,

      validationData: []
    })
      .then(() => {
        this.apiRequest = false;
        console.log('signup object', object);
        this.$router.push({
          path: '/confirmSignup',
          query: { email: this.email }
        });
      })
      .catch((err) => {
        SnackBar.setSnackBar({
          text: `${err.message}`,
          timeout: 60000,
          color: 'error'
        });
        this.apiRequest = false;
      });
  }
}
</script>