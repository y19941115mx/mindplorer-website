<template>
  <div class="box h-full">
    <div v-for="i in [...Array(6).keys()]" :key="i" class="item">
      <n-thing class="wh-full">
        <template #avatar>
          <n-avatar round size="medium" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"> </n-avatar>
        </template>
        <template #header> 标题 </template>

        <template #description> descdescdescdescdescdescdescdescdesc </template>
      </n-thing>
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
