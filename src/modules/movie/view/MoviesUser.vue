<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="movie in controller.userMovies" :key="movie.poster_path" cols="12" sm="6" md="4" lg="3" xl="2">
        <CardMovie :card="movie" :controller="controller" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import CardMovie from '../components/CardMovie.vue';
import movieController from '../controller/movieController';

const controller = movieController()

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
