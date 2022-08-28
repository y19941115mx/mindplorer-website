<template>
  <n-carousel :space-between="20" draggable>
    <!-- <router-link :to="{ name: routeHomePath }"></router-link> -->
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" />
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
  </n-carousel>
</template>

<script lang="ts" setup>
// import { routeName } from '~/src/router';

// const routeHomePath = routeName('root');
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 330px;
  object-fit: cover;
}
</style>
