<template>
  <div>
    <n-space size="medium">
      <n-image
        width="80"
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
        fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <div class="flex-col justify-around wh-full">
        <span class="title">中国共产党第二十次全国代表大会召开</span>
        <div>
          <span class="c-green from">from</span>
          <span class="pl-5 time">1月23日</span>
        </div>
      </div>
    </n-space>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.title {
  font-size: 16px;
  font-family: Microsoft YaHei, Microsoft YaHei-Bold;
  font-weight: weight;
  text-align: LEFT;
  color: #495057;
  line-height: 22px;
}

.from {
  font-size: 14px;
  font-family: Microsoft YaHei, Microsoft YaHei-Bold;
  font-weight: normal;
  text-align: LEFT;
  color: #129d69;
  line-height: 20px;
}

.time {
  font-size: 14px;
  font-family: Microsoft YaHei, Microsoft YaHei-Normal;
  font-weight: normal;
  text-align: LEFT;
  color: #007b82;
  line-height: 20px;
}
</style>
