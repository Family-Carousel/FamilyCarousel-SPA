<template>
  <div>
    <div>
      <v-toolbar color="primary" dark>
        <v-btn icon to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-toolbar-title>Family Carousel</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text to="/signup">Sign Up</v-btn>
          <v-btn text to="/login">Login</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-content>
      <slot />
    </v-content>

    <v-footer class="pa-3" color="primary" dark fixed>
      <v-col class="text-left">FamilyCarousel.com&nbsp; &copy; {{ new Date().getFullYear() }}</v-col>
      <v-col class="text-right">v{{ $store.getters.appVersion }}</v-col>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'DefaultLayout'
})
export default class DefaultLayout extends Vue {

}
</script>
