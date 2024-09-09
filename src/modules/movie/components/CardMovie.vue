<template>
  <v-card class="hoverable" elevation="2">
    <v-img :src="card.poster_path" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="300px" cover>
      <v-card-title class="text-white" style="background-color: rgba(0, 0, 0, 0.5)">
        {{ card.title }}
      </v-card-title>
    </v-img>

    <v-card-actions class="justify-end">
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon @click.stop="controller.changeAction(card, 'favorite')">
            <v-icon color="red">{{ card.favorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
          </v-btn>
        </template>
        <span>Favoritar</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon @click.stop="controller.changeAction(card, 'watched')">
            <v-icon color="blue">{{ card.watdhed ? 'mdi-eye' : 'mdi-eye-outline' }}</v-icon>
          </v-btn>
        </template>
        <span>Assistido</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon @click.stop="controller.changeAction(card, 'watch_later')">
            <v-icon color="green">{{ card.watch_later ? 'mdi-bookmark' : 'mdi-bookmark-outline' }}</v-icon>
          </v-btn>
        </template>
        <span>Assistir mais tarde</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { type PropType } from "vue";
import Movie from "../domain/entity/Movie";
import { movieController } from "../controller/movieController";

const props = defineProps({
  card: {
    type: Object as PropType<Movie>,
    required: true,
  },

  controller: {
    type: Object as PropType<movieController>,
    required: true,
  },
});
const card = props.card;
</script>
