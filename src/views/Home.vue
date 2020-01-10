<template>
  <div>
    <HomeComponent />
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Provide, Emit } from "vue-property-decorator";
import HomeComponent from "../components/HomeComponent.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

@Component({
  name: 'HomeView',
})
export default class HomeView extends Vue{

  // @Emit
  // components: {
  //   HomeComponent
  // },
  // created(): void {
  //   this.$emit(`update:layout`, DefaultLayout);
  // }
}
</script>
