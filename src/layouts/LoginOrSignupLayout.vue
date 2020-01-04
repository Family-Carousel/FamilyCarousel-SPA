<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <slot />
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LoginOrSignupLayer'
});
</script>