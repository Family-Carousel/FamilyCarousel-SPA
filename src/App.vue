<template>
  <div id="app">
    <v-app id="inspire">
      <component :is="layout">
        <router-view :layout.sync="layout" />
      </component>
      <v-snackbar
        v-for="(snackBar, index) in snackBars.filter(s => s.showing)"
        :key="snackBar.text + Math.random()"
        :style="`bottom: ${(index * 60) + 8}px`"
        v-model="snackBar.showing"
        :timeout="snackBar.timeout"
        :color="snackBar.color"
      >
        {{snackBar.text}}
        <v-btn text @click="snackBar.showing = false">Close</v-btn>
      </v-snackbar>
    </v-app>
  </div>
</template>

<script lang="ts">
import { SnackBar } from '@/store/modules/snackbar/store-snackbar';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App'
})
export default class App extends Vue {
  public layout: string = `div`;

  get snackBars() {
    return SnackBar.snackBars;
  }
}
</script>