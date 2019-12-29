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
          <h5>Coming Soon! Subscribe to learn all about it</h5>
          <div id="mc_embed_signup">
            <form
              action="https://familycarousel.us4.list-manage.com/subscribe/post?u=57428f46a48f61cfe6e374001&amp;id=97f31a4664"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div class="indicates-required">
                  <span class="asterisk">*</span> indicates required
                </div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">
                    Email Address
                    <span class="asterisk">*</span>
                  </label>
                  <input type="email" value name="EMAIL" class="required email" id="mce-EMAIL" />
                </div>
                <div class="mc-field-group">
                  <label for="mce-FNAME">
                    First Name
                    <span class="asterisk">*</span>
                  </label>
                  <input type="text" value name="FNAME" class="required" id="mce-FNAME" />
                </div>
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
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
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                </div>
              </div>
            </form>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

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