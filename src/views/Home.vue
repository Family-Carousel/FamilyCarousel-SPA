<template>
  <div>
    <HomeComponent />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HomeComponent from "../components/HomeComponent.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

@Component({
  name: 'HomeView',
  components: {
    HomeComponent
  }
})
export default class HomeView extends Vue{

  created(): void {
    this.$emit(`update:layout`, DefaultLayout);
  }
}
</script>
