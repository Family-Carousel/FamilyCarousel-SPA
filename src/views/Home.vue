<template>
  <div>
    <HomeComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeComponent from "../components/HomeComponent.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default Vue.extend({
  components: {
    HomeComponent
  },
  created(): void {
    this.$emit(`update:layout`, DefaultLayout);
  }
});
</script>
