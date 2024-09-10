<template>
  <v-container fluid style="max-height: 84vh; height: 100%">
    <v-row dense class="pb-4 d-flex align-center justify-center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-text-field
          v-model="controller.search.value"
          @keyup.enter="controller.fetchMovies(1)"
          append-icon="mdi-magnify"
          label="Pesquisar"
          single-line
          hide-details
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-container
      fluid
      v-if="!controller.movies.length"
      class="fill-height mx-auto d-flex align-center justify-center"
    >
      <v-row
        dense
        justify="center"
        class="align-center justify-center text-center"
      >
        <v-col>
          <h1>Para exibir a lista de filmes, realize uma busca</h1>
        </v-col>
      </v-row>
    </v-container>
    <v-row dense v-else>
      <v-col
        v-for="movie in controller.movies"
        :key="movie.poster_path"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <CardMovie :card="movie" :controller="controller" />
      </v-col>
    </v-row>
  </v-container>
  <v-row
    justify="center"
    class="mt-4 d-flex align-center justify-center"
    style="
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      max-width: 400px;
      max-height: 52px;
      margin: 0 auto;
    "
  >
    <pagination
      :currentPage="controller.currentPage.value"
      :totalPages="controller.totalPages.value"
      v-if="controller.totalPages.value > 1"
      @page-changed="(newPage) => controller.fetchMovies(newPage)"
    />
  </v-row>
</template>

<script lang="ts" setup>
import CardMovie from "../components/CardMovie.vue";
import Pagination from "../components/Pagination.vue";
import movieController from "../controller/movieController";

const controller = movieController();
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
