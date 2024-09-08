<template>
  <v-form ref="loginForm" v-model="controller.isPasswordMatching.value" lazy-validation>
    <v-text-field v-model="controller.user.email" label="Email" type="email"
      :rules="[v => !!v || 'Email é obrigatório', v => /.+@.+\..+/.test(v) || 'Email inválido']" required
      hide-details="auto"></v-text-field>

    <v-text-field v-model="controller.user.password" label="Senha" type="password"
      :rules="[v => !!v || 'Senha é obrigatória']" required hide-details="auto"></v-text-field>

    <v-btn color="primary" block @click="controller.login()">Entrar</v-btn>
  </v-form>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue';
import { AuthController } from '../controller/AuthController';

const props = defineProps({
  controller: {
    type: Object as PropType<AuthController>,
    required: true,
  },
})

const controller = props.controller

const loginForm = ref(null);
</script>
