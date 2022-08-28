<template>
  <div class="h-full">
    <n-space class="main" :vertical="true">
      <n-card class="">
        <div class="avatar_bg bg-#F2F2F2 w-250px h-215px flex-col-center mb-10">
          <n-avatar round :size="100" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
          <n-thing>name</n-thing>
          <n-thing>desc</n-thing>
        </div>
        <n-space class="item" justify="space-between">
          <span>生日</span>
          <span class="c-gray">日期</span>
        </n-space>
        <n-divider />
        <n-space class="item" justify="space-between">
          <span>生日</span>
          <span class="c-gray">日期</span>
        </n-space>
        <n-divider />
        <n-space class="item" justify="space-between">
          <span>生日</span>
          <span class="c-gray">日期</span>
        </n-space>
        <n-divider />
      </n-card>

      <n-card title="聚合标签">
        <div class="avatar_bg w-250px h-215px flex-col-center mb-10 border">
          <n-avatar :size="100" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        </div>
        <n-space class="item" justify="space-between">
          <span>生日</span>
          <span class="c-gray">日期</span>
        </n-space>
        <n-divider />
        <n-space class="item" justify="space-between">
          <span>生日</span>
          <span class="c-gray">日期</span>
        </n-space>
        <n-divider />
        <n-space class="item" justify="space-between">
          <span>生日</span>
          <span class="c-gray">日期</span>
        </n-space>
        <n-divider />
      </n-card>
      <n-table single-column :single-line="false" :bordered="false" class="w-full">
        <tbody>
          <tr>
            <td>10000</td>
            <td>120</td>
            <td>1000</td>
          </tr>

          <tr>
            <td>相关数据</td>
            <td>关联社团</td>
            <td>关联事件</td>
          </tr>
        </tbody>
      </n-table>
    </n-space>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
