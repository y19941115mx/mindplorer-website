<template>
  <div class="h-full">
    <iframe class="wh-full" :src="src"></iframe>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
// const src = 'https://v3.cn.vuejs.org/';
const src = route.query.src as string;
</script>

<style scoped></style>
