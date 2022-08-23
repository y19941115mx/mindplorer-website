<template>
  <div>
    <span class="title pl-5">热门事件</span>
    <n-grid cols="s:1 m:2 l:3" responsive="screen" :x-gap="50" :y-gap="15">
      <n-grid-item>
        <EventSwiper></EventSwiper>
      </n-grid-item>
      <n-grid-item>
        <n-space v-for="i in [1, 2, 3, 4]" :key="i" :vertical="true" size="large">
          <EventItem></EventItem>
        </n-space>
      </n-grid-item>
      <n-grid-item>
        <n-space v-for="i in [1, 2, 3, 5]" :key="i" :vertical="true" size="large">
          <EventItem></EventItem>
        </n-space>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import EventSwiper from './components/EventSwiper.vue';
import EventItem from './components/EventItem.vue';
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
