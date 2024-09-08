<template>
  <v-container fluid>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" cols="12" sm="6" md="4" lg="3" xl="2">
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
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-4">
      <v-pagination v-model="currentPage" :length="totalPages" @input="fetchMovies"></v-pagination>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
    cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
      { title: 'Mountain hiking', src: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg' },
      { title: 'City skyline', src: 'https://cdn.vuetifyjs.com/images/cards/city.jpg' },
      { title: 'Tropical beach', src: 'https://cdn.vuetifyjs.com/images/cards/beach.jpg' },
    ],
    currentPage: 1,
    totalPages: 5, // Simulando várias páginas
  }),
  methods: {
    fetchMovies() {
      // Aqui você faria a chamada para buscar mais filmes com base na página.
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
