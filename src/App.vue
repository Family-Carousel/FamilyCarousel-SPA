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
    </v-app>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "App",
  data() {
    return {
      layout: `div`
    };
  },
  computed: {
    ...mapState('snackbar', ['snackbars'])
  },
  created() {
    document.title = process.env.VUE_APP_NAME;
  }
};
</script>