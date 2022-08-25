<template>
  <div>
    <n-list>
      <n-list-item v-for="i in [...Array(5).keys()]" :key="i" @click="handleClick">
        <n-space :vertical="true" class="pl-5">
          <p>title</p>
          <n-space>
            <p>来源</p>
            <p>时间</p>
          </n-space>
        </n-space>
      </n-list-item>
    </n-list>
  </div>
</template>

<script setup lang="ts">
import { useRouterPush } from '@/composables';
import { routeName } from '~/src/router';

const { routerPush } = useRouterPush();

const handleClick = () => {
  const src = 'https://www.naiveui.com/';
  routerPush({ name: routeName('href'), query: { src } });
};
</script>

<style scoped></style>
