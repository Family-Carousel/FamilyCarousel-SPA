<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" md="8" sm="12">
        <v-card class="pa-2 card-style" outlined title>
          <v-img :src="require('../assets/family.svg')"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card class="pa-2 card-style" outlined title>
          <h1>Welcome to Family Carousel</h1>
          <h5>Coming Soon! Subscribe to learn all about it.</h5>
          <div id="mc_embed_signup">
            <form
              ref="form"
              action="https://familycarousel.us4.list-manage.com/subscribe/post?u=57428f46a48f61cfe6e374001&amp;id=97f31a4664"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <div class="mc-field-group">
                  <v-text-field
                    required
                    label="Email Address"
                    v-model="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                  />
                </div>
                <div class="mc-field-group">
                  <v-text-field
                    required
                    label="First Name"
                    v-model="firstName"
                    name="FNAME"
                    id="mce-FNAME"
                  />
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input
                    type="text"
                    name="b_57428f46a48f61cfe6e374001_97f31a4664"
                    tabindex="-1"
                    value
                  />
                </div>
                <div class="clear">
                  <v-btn
                    color="success"
                    block
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    @click="submitForm"
                  >Subscribe</v-btn>
                </div>
              </div>
            </form>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { SnackBar } from "@/store/modules/snackbar/store-snackbar";

interface HomeComponentData {
  email: string;
  firstName: string;
}

@Component({
  name: "HomeComponent"
})
export default class HomeComponent extends Vue {
  private email: string = "";
  private firstName: string = "";

  private submitForm(): void {
    SnackBar.setSnackBar({
      text: `Thanks for signing up for our mailing list!`,
      timeout: 6000,
      color: 'success'
    });
    (this.$refs.form as HTMLFormElement).submit();
    this.email = "";
    this.firstName = "";
  }
}
</script>

<style>
.card-style {
  height: 100%;
  width: 100%;
}
#mc_embed_signup {
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
}
</style>