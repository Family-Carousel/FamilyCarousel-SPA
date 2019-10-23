<template>
  <div>
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from "../components/HomeComponent.vue";
import DefaultLayout from "../layouts/DefaultLayout";

export default {
  components: {
    HomeComponent
  },
  created() {
    this.$emit(`update:layout`, DefaultLayout);
  }
};
</script>
