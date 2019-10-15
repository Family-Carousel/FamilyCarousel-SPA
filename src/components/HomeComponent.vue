<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/logo.png')" class="my-3" contain height="200"></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Family Carousel</h1>
        <p class="subheading font-weight-regular">
          We are still baking features for you
          <br />In the mean time please sign up in order to get notifications related to our features
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
h1 {
  color: #0a3953;
}

p {
  color: #0a3953;
}
</style>
