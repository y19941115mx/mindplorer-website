<template>
  <n-space :vertical="true" :size="16">
    <top-chart class="relative" />
    <data-card class="relative padding-content mt--20 z-1" :data-list="dataList" />
    <event-part class="padding-content" />
    <card-part class="padding-content"></card-part>
    <bottom-part class="padding-content" />
  </n-space>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { fetchHomePage } from '~/src/service';
import { BottomPart, DataCard, TopChart, EventPart, CardPart } from './components';

const dataList = ref();

onMounted(async () => {
  const { data } = await fetchHomePage();
  dataList.value = data?.StatisDataList;
});
</script>

<style scoped></style>
