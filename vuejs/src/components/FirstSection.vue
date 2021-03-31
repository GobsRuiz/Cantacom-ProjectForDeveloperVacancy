<template>
  <!-- First section -->
  <section class="container py-16">
    <v-row id="row">
      <!-- col -->
      <v-col cols="12" sm="5" md="3">
        <div class="text-center">
          <v-icon class="icons text-h5 mb-4 pa-3" color="white">
            mdi-cog
          </v-icon>

          <h3 class="mb-4">Editable theme</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni
            iste harum magnam
          </p>
        </div>
      </v-col>

      <!-- col -->
      <v-col cols="12" sm="5" md="3">
        <div class="text-center">
          <v-icon class="icons text-h5 mb-4 pa-3" color="white">
            mdi-star-settings
          </v-icon>

          <h3 class="mb-4">Editable theme</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni
            iste harum magnam
          </p>
        </div>
      </v-col>

      <!-- Col -->
      <v-col cols="12" sm="5" md="3" class="">
        <div class="text-center">
          <v-icon class="icons text-h5 mb-4 pa-3" color="white">
            mdi-earth
          </v-icon>

          <h3 class="mb-4">Editable theme</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni
            iste harum magnam
          </p>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "FirstSection",
};
</script>

<style scoped>
/* Row */
#row {
  justify-content: space-between;
}

/* First section */
/* Icons */
.icons {
  background-color: var(--primary);
  border-radius: 50%;
}

/* Responsive */
/* 960 */
@media (max-width: 960px) {
  #row {
    justify-content: center;
  }
}
</style>