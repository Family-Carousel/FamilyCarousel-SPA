<template>
  <div id="app">
    <v-app id="inspire">
      <div>
        <v-toolbar color="#0A3953" dark>
          <v-toolbar-side-icon to="/"></v-toolbar-side-icon>
          <v-toolbar-title>Family Carousel</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text to="/signup">Sign Up</v-btn>
            <v-btn text to="/login">Login</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </div>
      <v-content>
        <router-view></router-view>
      </v-content>

      <v-footer class="pa-3" color="#0A3953" dark fixed>
        <v-spacer></v-spacer>
        <div>FamilyCarousel.com&nbsp; &copy; {{ new Date().getFullYear() }}</div>
        <v-spacer></v-spacer>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>