<template>
  <n-grid :x-gap="16" :y-gap="16" :item-responsive="true">
    <n-grid-item span="0:24 640:24 1024:12">
      <n-card title="关键人物" :bordered="false" class="rounded-16px shadow-sm">
        <n-divider />
        <!-- <div class="h-200px"> -->
        <card-box></card-box>
        <!-- </div> -->
      </n-card>
    </n-grid-item>
    <n-grid-item span="0:24 640:24 1024:12">
      <n-card title="关键社区" :bordered="false" class="rounded-16px shadow-sm">
        <n-divider />
        <card-box></card-box>
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import CardBox from './components/CardBox.vue';

defineOptions({ name: 'HomePageBottomPart' });
</script>

<style scoped></style>
