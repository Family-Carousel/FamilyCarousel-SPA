<template>
  <div>
    <div>
      <v-toolbar color="#0A3953" dark>
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

    <v-footer class="pa-3" color="#0A3953" dark fixed>
      <v-spacer></v-spacer>
      <div>FamilyCarousel.com&nbsp; &copy; {{ new Date().getFullYear() }}</div>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>