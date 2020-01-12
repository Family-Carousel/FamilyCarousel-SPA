<template>
  <v-container>
    <v-row v-if="step === 1">
      <form>
        <v-col>
          <h3>Create a Family</h3>
          <h5>Complete the following form to add a new family to your account</h5>
        </v-col>
        <v-col>
          <v-text-field
            required
            counter
            outlined
            clearable
            persistent-hint="The name of this family"
            label="Family Name"
            v-model="name"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-textarea
            counter
            auto-grow
            clearable
            outlined
            label="Family Description"
            persistent-hint="Use this to describe your family"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-card flat color="transparent">
            <v-subheader>Select the estimated number of people in your family</v-subheader>

            <v-card-text>
              <v-row>
                <v-col class="pr-4">
                  <v-slider
                    v-model="slider"
                    class="align-center"
                    :max="max"
                    :min="min"
                    hide-details
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="slider"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 60px"
                      ></v-text-field>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-checkbox label="Pets are included in my family!" v-model="pets"></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox
            label="I agree to the Family Carousel Terms of Service"
            v-model="termsOfService"
          ></v-checkbox>
        </v-col>
        <v-col>
          <v-btn @click="createNewFamily" color="success">Create Family</v-btn>
        </v-col>
      </form>
    </v-row>
    <v-row v-if="step === 2"></v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'CreateFamilyComponent'
})
export default class CreateFamilyComponent extends Vue {
  private name: string = '';
  private slider: number = 1;
  private range = [1, 6];
  private min: number = 1;
  private max: number = 1;
  private pets: boolean = false;
  private termsOfService: boolean = false;
  private step: number = 1;

  public async createNewFamily() {
    this.step = 2;
  }
}
</script>

<style lang="stylus" scoped></style>
