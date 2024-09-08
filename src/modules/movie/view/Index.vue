<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" cols="12" sm="6" md="4" lg="3" xl="2">
        <CardMovie :card="card" />
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-4">
      <pagination :currentPage="currentPage" :totalPages="totalPages" @page-changed="fetchMovies" />
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import CardMovie from '../components/CardMovie.vue';
import Pagination from '../components/Pagination.vue';
import { Ref, ref } from 'vue'
import { movies } from '../consts/mockMovies';
import Movie from '../domain/entity/Movie';

const cards: Ref<Movie[]> = ref(movies)

const currentPage = ref(1)
const totalPages = ref(5)

function fetchMovies(newPage: number) {
  currentPage.value = newPage
  console.log(`Fetching movies for page: ${newPage}`)
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
