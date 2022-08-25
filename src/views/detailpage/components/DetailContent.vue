<template>
  <div class="">
    <n-tabs justify-content="space-evenly" type="line" default-value="0">
      <n-tab-pane name="0" tab="人格分析">
        <DetialUser></DetialUser>
      </n-tab-pane>
      <n-tab-pane name="1" tab="社团分析">
        <list-item></list-item>
      </n-tab-pane>
      <n-tab-pane name="2" tab="内容分析">
        <list-item></list-item>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script lang="ts" setup>
import DetialUser from './DetialUser.vue';
</script>
