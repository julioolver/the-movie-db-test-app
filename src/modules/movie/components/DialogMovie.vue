<template>
  <v-dialog v-model="controller.isOpen" max-width="800px" transition="dialog-bottom-transition" persistent>
    <v-card class="movie-card" elevation="24">
      <!-- Poster do filme -->
      <v-img :src="controller.selectedMovie.value.poster_path" height="400px" class="movie-poster">
        <v-card-title class="movie-title">
          {{ controller.selectedMovie.value.title }}
        </v-card-title>
      </v-img>

      <v-card-text class="movie-details">
        <v-container>
          <v-row>
            <!-- Área da sinopse e detalhes -->
            <v-col cols="12" class="synopsis-section">
              <p class="movie-synopsis">{{ controller.selectedMovie.value.synopsis || 'Sem descrição disponível' }}</p>
            </v-col>
            <v-col cols="12" sm="6" class="movie-info">
              <v-icon color="orange" class="mr-2">mdi-account</v-icon>
              <strong>Diretor:</strong> {{ controller.selectedMovie.value.director || 'Desconhecido' }}
            </v-col>
            <v-col cols="12" sm="6" class="movie-info">
              <v-icon color="blue" class="mr-2">mdi-clock-outline</v-icon>
              <strong>Duração:</strong> {{ controller.selectedMovie.value.duration || 'Não disponível' }} min
            </v-col>
            <v-col cols="12" sm="6" class="movie-info">
              <v-icon color="teal" class="mr-2">mdi-calendar</v-icon>
              <strong>Lançamento:</strong> {{ controller.selectedMovie.value.year || 'Data não disponível' }}
            </v-col>
            <v-col cols="12" sm="6" class="movie-info">
              <v-icon color="red" class="mr-2">mdi-heart</v-icon>
              <strong>Favorito:</strong> {{ controller.selectedMovie.value.favorite ? 'Sim' : 'Não' }}
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="controller.closeDialog()" elevation="5">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { movieController } from '../controller/movieController';

const props = defineProps({
  controller: {
    type: Object as PropType<movieController>,
    required: true,
  },
});

const controller = props.controller;
</script>

<style scoped>
/* Melhorias no estilo visual para criar uma aparência mais cinematográfica */
.movie-card {
  background-color: #1e1e1e;
  color: white;
  border-radius: 12px;
  overflow: hidden;
}

.movie-poster {
  object-fit: cover;
  /* Garante que a imagem não fique distorcida */
  width: 100%;
  /* Certifica que a imagem ocupe toda a largura disponível */
}

.movie-title {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
  padding: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #ffeb3b;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.movie-details {
  padding: 16px;
  color: #e0e0e0;
  font-size: 16px;
}

.movie-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.movie-synopsis {
  font-size: 18px;
  font-weight: 400;
  color: #f5f5f5;
  margin-bottom: 16px;
}

.synopsis-section {
  background: rgba(255, 255, 255, 0.05);
  padding: 16px;
  border-radius: 8px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Estilos responsivos */
@media (max-width: 600px) {
  .movie-poster {
    height: 200px;
    /* Reduzir o tamanho do poster em telas pequenas */
  }

  .movie-title {
    font-size: 18px;
    /* Ajuste do tamanho do título em telas menores */
  }

  .movie-synopsis {
    font-size: 16px;
    /* Ajustar o tamanho da sinopse em telas menores */
  }

  .movie-details {
    padding: 12px;
    /* Menos padding em telas menores */
  }

  .v-card-actions {
    justify-content: center;
    /* Centralizar o botão em telas pequenas */
  }
}
</style>
