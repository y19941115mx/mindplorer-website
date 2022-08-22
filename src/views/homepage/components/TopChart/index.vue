<template>
  <n-grid cols="1" responsive="screen" :x-gap="16" :y-gap="16">
    <n-grid-item span="1">
      <div class="header-layout">
        <n-image class="h-370px" :src="loginImage" preview-disabled />
        <div class="absolute-col-center">
          <div class="header-title">
            <p class="text-center">基于网络行为的心理刻画验证平台</p>
          </div>
          <div class="header-desc">
            <p>
              &nbsp; &nbsp;
              &nbsp;以跨平台多维度网络行为的统一表达为切入点，针对人物心理表现的多维性、个体行为的不确定性、社交网络的动态演化性，围绕体现人物心理的基本要素（个体行为和网络关系），从动（动态）静（微观、中观）结合视角出发，研究人物心理刻画的理论和方法，构建基于网络行为的人物心理刻画模型。
            </p>
          </div>
        </div>
      </div>
    </n-grid-item>
  </n-grid>
</template>
<script setup lang="ts">
import loginImage from '@/assets/header-image.png';
</script>

<style scoped>
.header-layout {
  width: 100%;
  position: relative;
}

.header-title {
  width: 100%;
  font-size: 42px;
  font-family: Microsoft YaHei, Microsoft YaHei-Normal;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.85);
  overflow: hidden;
}

.header-desc {
  margin-top: 2%;
  width: 100%;
  padding: 0 20%;
  border-radius: 0px;
  font-size: 16px;
  font-family: SimHei, SimHei-Normal;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.4);
  line-height: 28px;
  letter-spacing: 4px;
  overflow: hidden;
}
</style>
