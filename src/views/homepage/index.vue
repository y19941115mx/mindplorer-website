<template>
  <n-space :vertical="true" :size="16">
    <top-chart class="relative" />
    <data-card class="relative padding-content mt--20 z-1" />
    <bottom-part />
  </n-space>
</template>

<script lang="ts" setup>
import { BottomPart, DataCard, TopChart } from './components';
</script>

<style scoped></style>
