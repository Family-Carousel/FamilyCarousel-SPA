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

<script lang="ts">
import { Vue, Component, PropSync, Provide } from "vue-property-decorator";
import { Module, VuexModule, getModule } from 'vuex-module-decorators';

@Component({
  name: 'App',
})
export default class App extends Vue {
  @Provide() layout = `div`;
  
}
</script>