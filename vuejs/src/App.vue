<template>
  <v-app>
    <AppBar />

    <v-main>
      <router-view></router-view>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    AppBar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
/* Colors */
:root{
  --primary: #2ecc71;
}
.white2-text{
  color: #848484;
}



/* Container */
.container{
  width: 80%;
  max-width: 1600px;

  margin: 0 auto;
}
</style>
