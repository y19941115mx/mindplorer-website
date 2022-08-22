<template>
  <dark-mode-container class="flex-center h-full">
    <span>Copyright ©2022 {{ title }}</span>
  </dark-mode-container>
</template>

<script setup lang="ts">
defineOptions({ name: 'GlobalFooter' });
const { VITE_APP_TITLE: title } = import.meta.env;
</script>

<style scoped></style>
