<template>
  <div class="mx-auto mx-100 w-3/5 rounded-lg">
    <n-list class="pb-10px">
      <n-list-item v-for="i in [...Array(5).keys()]" :key="i">
        <div class="flex justify-start">
          <div class="flex-center">
            <Icon icon="ant-design:file-done-outlined" :style="{ fontSize: '80px', color: theme.themeColor }" />
          </div>
          <div class="flex-1-hidden">
            <div class="flex-col justify-around pl-25px">
              <h3 class="text-15px">测试</h3>
              <h3 class="text-10px mt-5">描述</h3>
            </div>
          </div>
        </div>
      </n-list-item>
      <div class="mt10px">
        <n-space justify="center" class="mt10px">
          <n-button :loading="loading" type="primary" @click="startLoading">开始加载</n-button>
          <n-button @click="endLoading">取消加载</n-button>
        </n-space>
      </div>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useThemeStore } from '@/store';
import { useLoading } from '@/hooks';

defineOptions({ name: 'HomepageDataCard' });

const theme = useThemeStore();
const { loading, startLoading, endLoading } = useLoading();
</script>

<style scoped></style>
