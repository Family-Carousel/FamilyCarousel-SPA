<template>
  <div>
    <v-btn @click="logout">Logout</v-btn>
  </div>
</template>

<script>
import DashboardLayout from "../../layouts/DashboardLayout";
import { Auth } from "aws-amplify";

export default {
  components: {
    
  },
  created() {
    this.$emit(`update:layout`, DashboardLayout);
  },
  methods: {
    logout() {
      Auth.signOut().then(() => {
        this.$router.push({
          path: "/login"
        });
      });
    }
  }
};
</script>