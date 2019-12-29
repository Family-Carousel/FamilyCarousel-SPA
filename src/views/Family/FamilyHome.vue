<template>
  <div>
      <p>this is the default My Family Home Page</p>
  </div>
</template>

<script>
import DashboardLayout from "../../layouts/DashboardLayout";

export default {
  components: {
    
  },
  created() {
    this.$emit(`update:layout`, DashboardLayout);
  }
};
</script>