<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="pa-4" width="400" max-width="100%">
      <v-tabs v-model="controller.tabAuth.value" background-color="primary" dark>
        <v-tab :value="0">
          Login
        </v-tab>
        <v-tab :value="1">
          Cadastro
        </v-tab>
      </v-tabs>
      <v-tabs-window v-model="controller.tabAuth.value">
        <v-tabs-window-item :value="0">
          <SignInForm :controller="controller" />
        </v-tabs-window-item>
        <v-tabs-window-item :value="1">
          <SignUpForm :controller="controller" />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import authController from '../controller/AuthController';
import SignInForm from '../components/SignInForm.vue';
import SignUpForm from '../components/SignUpForm.vue';

const controller = authController()

</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
