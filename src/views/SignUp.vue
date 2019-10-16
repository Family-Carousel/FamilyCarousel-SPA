<template>
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-12">
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
    </v-card>
  </v-flex>
</template>

<script>
import LoginOrSignUpLayout from "../layouts/LoginOrSignupLayout";

export default {
  created() {
    this.$emit(`update:layout`, LoginOrSignUpLayout);
  }
};
</script>