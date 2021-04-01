<template>
  <!-- First section -->
  <section class="container py-16">
    <v-row id="row">
      <v-col class="column" cols="12" sm="5" md="3" v-for="(card, i) in cards" :key="i">
        <div class="text-center">
          <v-icon class="icons text-h4 mb-4 pa-4" color="white">{{card.icon}}</v-icon>

          <h3 class="text-capitalize mb-4">{{card.title}}</h3>

          <p>
            {{card.text}}
          </p>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "FirstSection",

  data: () => ({
    cards: [
      {
        icon: 'mdi-cog',
        title: 'Editable theme',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni iste harum magnam',
      },
      {
        icon: 'mdi-star-settings',
        title: 'Flat design',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni iste harum magnam',
      },
      {
        icon: 'mdi-earth',
        title: 'Reach your audience',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni iste harum magnam',
      },
    ]
  })
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

/* 600 */
@media (max-width: 600px) {
  /* Column */
  .column{
    margin-bottom: 20px;
    padding: 0 20px;
  }.column:last-child{
    margin-bottom: 0;
  }
}
</style>