<template>
  <div>
    <span class="title pl-5">热门标签</span>
    <n-grid x-gap="12" :cols="6" class="pl-5">
      <n-gi v-for="i in [...Array(6).keys()]" :key="i">
        <tag-column></tag-column>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import TagColumn from './components/TagColumn.vue';
</script>

<style scoped>
.title {
  font-size: 16px;
  font-family: Microsoft YaHei, Microsoft YaHei-Bold;
  font-weight: bold;
  text-align: LEFT;
  color: rgba(44, 44, 44, 0.85);
  line-height: 34px;
}
</style>
