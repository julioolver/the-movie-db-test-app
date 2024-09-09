<template>
  <v-form ref="registerForm" v-model="controller.valid" lazy-validation @submit.prevent>
    <v-text-field v-model="controller.user.name" label="Nome" :rules="[v => !!v || 'Nome é obrigatório']" required
      hide-details="auto"></v-text-field>

    <v-text-field v-model="controller.user.email" label="Email" type="email"
      :rules="[v => !!v || 'Email é obrigatório', v => /.+@.+\..+/.test(v) || 'Email inválido']" required
      hide-details="auto"></v-text-field>

    <v-text-field v-model="controller.user.password" label="Senha" type="password"
      :rules="[v => !!v || 'Senha é obrigatória']" required hide-details="auto"></v-text-field>

    <v-text-field v-model="controller.user.password_confirmation" label="Confirmar Senha" type="password"
      :rules="[v => v === controller.isPasswordMatching.value || 'As senhas não coincidem']" required
      hide-details="auto"></v-text-field>

    <v-btn color="success" block @click="controller.register()" type="submit">Cadastrar</v-btn>
  </v-form>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { AuthController } from '../controller/AuthController';

const props = defineProps({
  controller: {
    type: Object as PropType<AuthController>,
    required: true,
  },
})

const controller = props.controller
</script>
