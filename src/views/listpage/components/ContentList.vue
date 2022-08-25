<template>
  <div class="mx-auto mx-100 w-3/5 rounded-lg">
    <n-list>
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
      <div class="flex-center">
        <n-button quaternary type="primary" class="h-40px"> 更多 </n-button>
      </div>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useThemeStore } from '@/store';

defineOptions({ name: 'HomepageDataCard' });

const theme = useThemeStore();
// interface CardData {
//   id: string;
//   title: string;
//   value: number[];
//   prefix: string[];
//   icon: string;
// }

// const cardData: CardData[] = [
//   {
//     id: 'user',
//     title: '用户数据',
//     value: [20000, 60, 10],
//     prefix: ['系统总量', '今日新增', '新增对齐'],
//     icon: 'ant-design:user-outlined'
//   },
//   {
//     id: 'user',
//     title: '社团数据',
//     value: [600, 20, 10],
//     prefix: ['系统总量', '今日新增', '新增关联'],
//     icon: 'fluent:people-community-28-filled'
//   },
//   {
//     id: 'user',
//     title: '事件数据',
//     value: [200, 2, 2],
//     prefix: ['系统总量', '热点事件', '谣言判定'],
//     icon: 'ant-design:file-done-outlined'
//   }
// ];
</script>

<style scoped></style>
