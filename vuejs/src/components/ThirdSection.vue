<template>
  <!-- Third section -->
  <section class="container text-center py-16">
    <p class="text-subtitle-1 white2-text mb-5">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vitae
      voluptatem velit, culpa iure, quo dicta eligendi laborum recusandae, fuga
      est totam nemo ipsam illum. Eveniet nisi minus architecto maiores.
    </p>

    <p class="mb-4">Nome do membro da equipe</p>

    <!-- Images of team members -->
    <row class="d-flex justify-center flex-wrap mb-12">
      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Olivia.png" max-width="50"></v-img>
      </div>
      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Vitor.png" max-width="50"></v-img>
      </div>
      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Leticia.png" max-width="50"></v-img>
      </div>
      <div class="images mr-1">
        <v-img
          src="../assets/thirdSection/José&Patrícia.png"
          max-width="50"
        ></v-img>
      </div>
      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Carlos.png" max-width="50"></v-img>
      </div>
      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Cintia.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/André.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Ana.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Eduardo.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Jonathan.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Sofia.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img
          src="../assets/thirdSection/Paschoal&Magdalena.png"
          max-width="50"
        ></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Laudenir.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Ester.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Isaac.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Paulo.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Luciano.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Marina.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Geraldo.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/Marcelo.png" max-width="50"></v-img>
      </div>

      <div class="images mr-1">
        <v-img src="../assets/thirdSection/luiz.png" max-width="50"></v-img>
      </div>
    </row>

    <h3 class="text-h6 text-capitalize mb-4">Say hi & get in touch</h3>

    <p class="white2-text text-subtitle-1 mb-8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </p>

    <!-- Icons -->
    <v-row class="justify-center">
      <v-col v-for="(icon, i) in icons" :key="i" cols="auto" class="pa-0 px-2">
        <v-icon class="icons rounded-circle pa-2 my-1">{{icon}}</v-icon>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
    data: () => ({
        icons: [
          'mdi-twitter',
          'mdi-facebook',
          'mdi-pinterest',
          'mdi-google-plus',
          'mdi-linkedin',
          'mdi-youtube',
        ],
        images: [
          '~/assets/thirdSection/Olivia.png',
          '~/assets/thirdSection/Olivia.png',
          '../assets/thirdSection/luiz.png',
          '~/assets/1.png',
          '../assets/header/logo.png',
          '../assets/header/cell.png',
        ]
    }),
};
</script>

<style scoped>
/* Images */
.images{
    padding: 2px 0;
    position: relative;
}
.images:hover::after {
    content: "";

    width: 100%;
    height: 100%;

    background-color: rgba(46, 204, 113, .5);

    position: absolute;
    top: 0;
    left: 0;
}

/* Icons */
.icons {
  color: #fff;
  background-color: #d4d4d4;
}
.icons:hover {
  cursor: pointer;
  background-color: var(--primary);
}
</style>