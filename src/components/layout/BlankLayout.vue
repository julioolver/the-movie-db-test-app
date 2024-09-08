<template>
  <v-app>
    <v-main>
      <v-container class="fill-height d-flex align-center justify-center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <router-view />
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'BlankLayout',
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
