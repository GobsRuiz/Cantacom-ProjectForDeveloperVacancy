<template>
  <v-app>
    <AppBar />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';

export default {
  name: 'App',

  components: {
    AppBar,
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
