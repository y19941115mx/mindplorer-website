<template>
  <div class="">
    <n-tabs justify-content="space-evenly" type="line">
      <n-tab-pane v-for="(i, index) in tabs" :key="index" :name="index" :tab="i">
        <SearchWithTag></SearchWithTag>
        <tags-table class="my-3"></tags-table>
        <content-list></content-list>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SearchWithTag from './components/SearchWithTag.vue';
import TagsTable from './components/TagsTable.vue';
import ContentList from './components/ContentList.vue';

const tabs = ref(['人物', '社团', '事件']);
</script>
