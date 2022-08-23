<template>
  <n-space :vertical="true" :size="16">
    <top-chart class="relative" />
    <data-card class="relative padding-content mt--20 z-1" />
    <event-part class="padding-content" />
    <card-part class="padding-content"></card-part>
    <bottom-part class="padding-content" />
  </n-space>
</template>

<script lang="ts" setup>
import { BottomPart, DataCard, TopChart, EventPart, CardPart } from './components';
</script>

<style scoped></style>
