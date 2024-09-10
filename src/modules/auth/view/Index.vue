<template>
  <v-container class="fill-height d-flex align-center justify-center auth-container">
    <v-card class="pa-4" width="400" max-width="100%" elevation="10" color="#1D2630">
      <v-tabs
        v-model="controller.tabAuth.value"
        background-color="primary"
      >
        <v-tab :value="0"> Login </v-tab>
        <v-tab :value="1"> Cadastro </v-tab>
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
import authController from "../controller/AuthController";
import SignInForm from "../components/SignInForm.vue";
import SignUpForm from "../components/SignUpForm.vue";

const controller = authController();
</script>

<style scoped>
.fill-height {
  height: 100vh;
}

.auth-container {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  min-width: 100vw;
  min-height: 100vh;
}

.v-card {
  background-color: #2e2e2e;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}

.v-tabs {
  border-bottom: 1px solid #ccc;
}

.v-tab {
  font-weight: bold;
}

.v-btn {
  border-radius: 24px;
  margin-top: 10px;
}
</style>
