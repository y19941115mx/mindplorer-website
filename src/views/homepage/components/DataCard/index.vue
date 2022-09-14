<template>
  <n-grid cols="s:1 m:2 l:3" responsive="screen" :x-gap="50" :y-gap="15">
    <n-grid-item v-for="item in cardData" :key="item.id">
      <gradient-bg>
        <div class="flex justify-start">
          <div class="flex-center">
            <Icon :icon="item.icon" :style="{ fontSize: '80px', color: theme.themeColor }" />
          </div>
          <div class="flex-1-hidden">
            <div class="flex-col justify-around pl-25px">
              <h3 class="text-20px">{{ item.title }}</h3>
              <div v-for="(row, index) in item.value" :key="index" class="pt-15px">
                <count-to
                  :prefix="item.prefix[index]"
                  active-color="red"
                  suffix="万"
                  :start-value="1"
                  :end-value="row"
                  class="text-dark dark:text-dark"
                />
              </div>
            </div>
          </div>
        </div>
      </gradient-bg>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Icon } from '@iconify/vue';
import { useThemeStore } from '@/store';
import { GradientBg } from './components';

defineOptions({ name: 'HomepageDataCard' });

interface CardData {
  id: string;
  title: string;
  value: number[];
  prefix: string[];
  icon: string;
}

interface Props {
  dataList?: ApiHomepage.StatisData[];
}

const props = withDefaults(defineProps<Props>(), {
  dataList: undefined
});

const theme = useThemeStore();

const cardData = ref<CardData[]>([
  {
    id: 'user',
    title: '用户数据',
    value: [20000, 60, 10],
    prefix: ['系统总量', '今日新增', '新增对齐'],
    icon: 'ant-design:user-outlined'
  },
  {
    id: 'user',
    title: '社团数据',
    value: [600, 20, 10],
    prefix: ['系统总量', '今日新增', '新增关联'],
    icon: 'fluent:people-community-28-filled'
  },
  {
    id: 'user',
    title: '事件数据',
    value: [200, 2, 2],
    prefix: ['系统总量', '热点事件', '谣言判定'],
    icon: 'ant-design:file-done-outlined'
  }
]);

watch(
  () => props.dataList,
  () => {
    for (let index = 0; index < cardData.value.length; index++) {
      const element = cardData.value[index];

      const data = props.dataList[index];
      element.value = [data.TotalNum, data.IncreaseNum, data.EventNum];
    }
  }
);
</script>

<style scoped></style>
