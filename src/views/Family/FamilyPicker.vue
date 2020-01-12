<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <v-img :src="require('@/assets/logo.png')" class="mb-8" contain height="200"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-spacer></v-spacer>
            <v-btn
              class="center_button"
              color="primary"
            >Choose your family from the below or click here to create a new one now</v-btn>
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="family in familys" :key="family.title" :cols="family.flex">
              <v-card>
                <v-img
                  v-if="!family.src"
                  :src="require('@/assets/family.svg')"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                  <v-card-title align="left" class="make_a_span">
                    {{family.title}}
                    <h4 class="isMember" v-if="family.isMember"><span>(Subscribed)</span></h4>
                  </v-card-title>
                </v-img>
                <v-card-actions>
                  <v-btn color="success" block>Continue working with this family</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'FamilyPickerView'
})
export default class FamilyPickerView extends Vue {
  private familys = [
    {
      src: '',
      title: 'Cavanaugh Family',
      flex: 4,
      isMember: true
    },
    {
      src: '',
      title: 'Cavanaugh Family2',
      flex: 4
    },
    {
      src: '',
      title: 'Cavanaugh Family3',
      flex: 4
    }
  ];
}
</script>
<style lang="scss">
.center_button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  font-size: 7px;
}
.isMember {
  color: red;
  font: bold 24px/24px Helvetica, Sans-Serif;
  letter-spacing: -1px;
  background: rgb(0, 0, 0); /* fallback color */
  background: rgba(0, 0, 0, 0.9);
  padding: 3px
}
</style>