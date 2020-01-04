<template>
  <div id="app">
    <v-app id="inspire">
      <component :is="layout">
        <router-view :layout.sync="layout" />
      </component>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      layout: `div`,
    };
  }
};
</script>