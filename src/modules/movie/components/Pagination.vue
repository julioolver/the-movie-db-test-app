<template>
  <v-pagination v-model="currentPage" :length="totalPages" @input="$emit('page-changed', currentPage)"></v-pagination>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>()

const currentPage = ref(props.currentPage)

const emit = defineEmits<{
  (e: 'page-changed', newPage: number): void;
}>()

watch(() => props.currentPage, (newPage) => {
  emit('page-changed', newPage)
})
</script>
