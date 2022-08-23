<template>
  <div class="mx-auto mx-100 w-3/5 rounded-lg">
    <div class="relative w-full flex items-center transform transition">
      <icon-material-symbols:search size="20" class="!absolute left-4 cursor-pointer text-gray-500 transition" />

      <input
        v-model="searchValue"
        type="text"
        class="px-10 w-full h-10 outline-none border-2 border-gray-500 rounded-xl placeholder-gray-500 transition dark:bg-gray-800 dark:text-light-500 dark:placeholder-gray-400 bg-[rgba(255,255,255,0.7)]"
        :placeholder="placeholderText"
      />
      <div class="flex justify-center !absolute right-10 mb-2" :style="{ top: '7.8px' }">
        <n-space>
          <n-tag v-for="(item, index) in suffix" :key="index" size="small">
            {{ item }}
          </n-tag>
        </n-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const searchValue = ref(null);
const placeholderText = ref('搜索');
const suffix = ref(['hello']);
</script>
