<template>
  <v-card class="hoverable" elevation="2">
    <v-img :src="card.src" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
      <v-card-title class="text-white" v-text="card.title"></v-card-title>
    </v-img>

    <v-card-actions class="justify-end">
      <v-btn icon>
        <v-icon color="red">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="blue">mdi-bookmark</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="green">mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

const props = defineProps({
  card: {
    type: Object as PropType<{ title: string; src: string }>,
    required: true,
  },
});

const card = props.card;
</script>
