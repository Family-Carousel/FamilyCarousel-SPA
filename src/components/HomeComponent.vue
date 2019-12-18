<template>
  <v-container class="container">
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
        <v-img :src="require('../assets/family.svg')"></v-img>
      </v-col>
      <v-col cols="6" md="4">
        <h1>Welcome to Family Carousel</h1>
        <h5>Coming Soon! Sign up to learn all about it</h5>
        <div class="email-input-wrapper">
          <input type="email" placeholder="Email" />
          <button>Submit</button>
        </div>
        <div class="info-wrapper">
          <p>
            We are still baking features for you.
            In the mean time please sign up in order to get notifications related to our features
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="scss">
h1 {
  color: #0a3953;
}

p {
  color: #0a3953;
}

.container {
  display: grid;
  grid-template-columns: 53fr 47fr;
  height: 100vh;
}
.left {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.right {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  right-h1 {
    font-size: 51px;
    margin-left: 40px;
  }
  right-h5 {
    margin: 0 0 40px 40px;
  }
}

.email-input-wrapper {
  margin-left: 40px;
  margin-bottom: 40px;
  button {
    all: unset;
    border-radius: 10px;
    background-image: linear-gradient(to right, orange, red);
    text-align: center;
    width: 100px;
    height: 25px;
    color: navajowhite;
  }
}

.info-wrapper {
  max-width: 50%;
  margin-left: 40px;
  p {
    color: gray;
  }
}
</style>
