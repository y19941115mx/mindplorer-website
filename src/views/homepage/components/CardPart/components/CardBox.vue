<template>
  <div class="box h-full">
    <div v-for="i in [...Array(8).keys()]" :key="i" class="item">
      <n-space>
        <span>1</span>
        <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        <n-space :vertical="true">
          <span>name</span>
          <span>desc</span>
        </n-space>
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
}
</style>
