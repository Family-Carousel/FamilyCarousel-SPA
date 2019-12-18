<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" md="8">
        <v-card class="pa-2 card-style" outlined title>
          <v-img :src="require('../assets/family.svg')"></v-img>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="pa-2 card-style" outlined title>
          <h1>Welcome to Family Carousel</h1>
          <h5>Coming Soon! Subscribe to learn all about it</h5>
          <v-text-field placeholder="Email Address" solo id="subscriptionAddress" name="subscriptionAddress" input="email"></v-text-field>
          <v-btn x-large color="success" dark block>Subscribe</v-btn>
          <p>
            We are still baking features for you.
            In the mean time please sign up in order to get notifications related to our features
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
.card-style{
  height: 100%;
  width: 100%
}
</style>