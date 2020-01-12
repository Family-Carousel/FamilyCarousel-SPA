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

<script lang="ts">
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'FamilyHomeView'
})
export default class FamilyHomeView extends Vue {
  private familys = [];

  public created() {
    this.$emit(`update:layout`, DashboardLayout);
  }
}
</script>
