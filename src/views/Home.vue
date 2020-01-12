<template>
  <div>
    <HomeComponent />
  </div>
</template>

<script lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { Component, Vue } from 'vue-property-decorator';
import HomeComponent from '../components/HomeComponent.vue';

@Component({
  components: {
    HomeComponent
  },
  name: 'HomeView'
})
export default class HomeView extends Vue {
  public created(): void {
    this.$emit(`update:layout`, DefaultLayout);
  }
}
</script>
