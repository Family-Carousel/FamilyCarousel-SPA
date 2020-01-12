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
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'LoginOrSignupLayout'
})
export default class LoginOrSignupLayout extends Vue {

}
</script>
