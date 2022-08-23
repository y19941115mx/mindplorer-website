<template>
  <div class="box">
    <span class="title">标题</span>
    <n-space :vertical="true">
      <span v-for="i in [...Array(5).keys()]" :key="i" class="tag">标签</span>
    </n-space>
    <span class="footer">更多</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.title {
  width: 82px;
  height: 29px;
  font-size: 16px;
  font-family: Microsoft YaHei, Microsoft YaHei-Normal;
  font-weight: normal;
  text-align: LEFT;
  color: rgba(44, 44, 44, 0.85);
  line-height: 22px;
}
</style>
