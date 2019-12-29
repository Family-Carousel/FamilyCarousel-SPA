<template>
  <div>
      <div v-if="!familys.length">
        <v-btn color="success" block>Create your first Family</v-btn>
      </div>
      <div v-if="familys.length">
        <v-row>
          <v-col align="right">
            <v-btn color="success">Create a new Family</v-btn>
          </v-col>
          <v-col>
            <v-data-table></v-data-table>
          </v-col>
        </v-row>
      </div>
  </div>
</template>

<script>
import DashboardLayout from "../../layouts/DashboardLayout";

export default {
  components: {
    
  },
  data() {
    return {
      familys: []
    };
  },
  created() {
    this.$emit(`update:layout`, DashboardLayout);
  }
};
</script>