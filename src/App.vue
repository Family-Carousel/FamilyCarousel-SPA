<template>
  <div id="app">
    <v-app id="inspire">
      <component :is="layout">
        <router-view :layout.sync="layout" />
      </component>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Provide } from 'vue-property-decorator';

@Component
export default class App extends Vue {

  @Provide() layout = `div`
  // data() {
  //   return {
  //     layout: `div`,
  //   };
  // }
}
</script>