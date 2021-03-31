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
    <row class="d-flex justify-space-between mb-12">
      <div class="images">
        <v-img src="../assets/thirdSection/Olivia.png" max-width="50"></v-img>
      </div>
      <div class="images">
        <v-img src="../assets/thirdSection/Vitor.png" max-width="50"></v-img>
      </div>
      <div class="images">
        <v-img src="../assets/thirdSection/Leticia.png" max-width="50"></v-img>
      </div>
      <div class="images">
        <v-img
          src="../assets/thirdSection/José&Patrícia.png"
          max-width="50"
        ></v-img>
      </div>
      <div class="images">
        <v-img src="../assets/thirdSection/Carlos.png" max-width="50"></v-img>
      </div>
      <div class="images">
        <v-img src="../assets/thirdSection/Cintia.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/André.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/Ana.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/Eduardo.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/Jonathan.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/Sofia.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img
          src="../assets/thirdSection/Paschoal&Magdalena.png"
          max-width="50"
        ></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/Laudenir.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/Ester.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/Isaac.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/Paulo.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/Luciano.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/Marina.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/Geraldo.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/Marcelo.png" max-width="50"></v-img>
      </div>

      <div class="images">
        <v-img src="../assets/thirdSection/luiz.png" max-width="50"></v-img>
      </div>
    </row>

    <h3 class="text-h6 text-capitalize mb-4">Say hi & get in touch</h3>

    <p class="white2-text text-subtitle-1 mb-8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </p>

    <v-row class="justify-center">
      <v-icon class="icons rounded-circle mr-2 pa-2"> mdi-twitter </v-icon>
      <v-icon class="icons rounded-circle mr-2 pa-2"> mdi-facebook </v-icon>
      <v-icon class="icons rounded-circle mr-2 pa-2"> mdi-pinterest </v-icon>
      <v-icon class="icons rounded-circle mr-2 pa-2"> mdi-google-plus </v-icon>
      <v-icon class="icons rounded-circle mr-2 pa-2"> mdi-linkedin </v-icon>
      <v-icon class="icons rounded-circle pa-2"> mdi-youtube </v-icon>
    </v-row>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Images */
.images{
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