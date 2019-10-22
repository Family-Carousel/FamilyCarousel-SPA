<template>
  <div>
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from "../components/HomeComponent.vue";
import DashboardLayout from "../layouts/DashboardLayout";

export default {
  components: {
    HomeComponent
  },
  created() {
    this.$emit(`update:layout`, DashboardLayout);
  }
};
</script>
