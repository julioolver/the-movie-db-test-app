<template>
  <v-pagination v-model="currentPage" :length="totalPages" />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: "page-changed", newPage: number): void;
}>();

const currentPage = ref(props.currentPage);

watch(
  () => props.currentPage,
  (newPage) => {
    currentPage.value = newPage;
  }
);

watch(currentPage, (newPage) => {
  emit("page-changed", newPage);
});
</script>
