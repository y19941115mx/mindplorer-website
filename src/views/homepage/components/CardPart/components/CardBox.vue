<template>
  <n-grid :x-gap="16" :y-gap="16" responsive="screen" cols="s:1 m:2 l:2">
    <n-gi v-for="i in [...Array(6).keys()]" :key="i">
      <n-thing class="h-full">
        <template #avatar>
          <n-avatar round size="medium" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"> </n-avatar>
        </template>
        <template #header> 标题 </template>

        <template #description> descdescdescdescdescdescdescdescdesc </template>
      </n-thing>
    </n-gi>
  </n-grid>
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
