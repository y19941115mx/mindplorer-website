<template>
  <div class="mx-auto mx-100 w-3/5">
    <n-grid v-for="i in [...Array(4).keys()]" :key="i" cols=" 6">
      <n-grid-item :span="1">
        <div class="bg-gray border flex-center p-10px">
          <span class="header">国籍/地区</span>
        </div>
      </n-grid-item>
      <n-grid-item :span="5">
        <div class="border p-10px border-l-none border-b-none">
          <n-space class="content" justify="space-around">
            <span>中国</span>
            <span>美国</span>
            <span>俄罗斯</span>
            <span>亚洲</span>
            <span>欧洲</span>
            <span class="c-blue">更多</span>
          </n-space>
        </div>
      </n-grid-item>
    </n-grid>
    <n-grid cols=" 6">
      <n-grid-item :span="1">
        <div class="bg-gray border flex-center p-10px">
          <span class="header">国籍/地区</span>
        </div>
      </n-grid-item>
      <n-grid-item :span="5">
        <div class="border p-10px border-l-none">
          <n-space class="content" justify="space-around">
            <span>中国</span>
            <span>美国</span>
            <span>俄罗斯</span>
            <span>亚洲</span>
            <span>欧洲</span>
            <span class="c-blue">更多</span>
          </n-space>
        </div>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  font-size: 16px;
  font-family: Microsoft YaHei, Microsoft YaHei-Normal;
  font-weight: normal;
  text-align: CENTER;
  color: #333333;
  line-height: 20px;
}

.content {
  font-size: 16px;
  font-family: Microsoft YaHei, Microsoft YaHei-Normal;
  font-weight: normal;
  text-align: LEFT;
  color: #000000;
  line-height: 22px;
}
</style>
