<template>
  <div id="app">
    <v-app id="inspire">
      <component :is="layout">
        <router-view :layout.sync="layout" />
      </component>
      <v-snackbar
        v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
        :key="snackbar.text + Math.random()"
        :style="`bottom: ${(index * 60) + 8}px`"
        v-model="snackbar.showing"
        :timeout="snackbar.timeout"
        :color="snackbar.color"
      >
        {{snackbar.text}}
        <v-btn text @click="snackbar.showing = false">Close</v-btn>
      </v-snackbar>
      <v-footer app>
        <v-col class="text-left">&copy; {{ new Date().getFullYear() }}</v-col>
        <v-col></v-col>
        <v-col class="text-right">v{{ $store.getters.appVersion }}</v-col>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      layout: `div`
    };
  },
  created() {
    document.title = process.env.VUE_APP_NAME;
  }
};
</script>