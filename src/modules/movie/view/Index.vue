<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" cols="12" sm="6" md="4" lg="3" xl="2">
        <CardMovie :card="card" />
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-4">
      <v-pagination v-model="currentPage" :length="totalPages" @input="fetchMovies"></v-pagination>
    </v-row>
  </v-container>
</template>

<script>
import CardMovie from '../components/CardMovie.vue';

export default {
  data: () => ({
    cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
      { title: 'Mountain hiking', src: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg' },
      { title: 'City skyline', src: 'https://cdn.vuetifyjs.com/images/cards/city.jpg' },
      { title: 'Tropical beach', src: 'https://cdn.vuetifyjs.com/images/cards/beach.jpg' },
    ],
    currentPage: 1,
    totalPages: 5,
  }),

  components: {
    CardMovie,
  },
  methods: {
    fetchMovies() {
      console.log('Fetching page:', this.currentPage);
    },
  },
}
</script>

<style scoped>
.v-card {
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.v-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}
</style>
