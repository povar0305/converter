<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <RouterLink to="/currencies">1</RouterLink>
    <RouterLink to="/converter">2</RouterLink>
    <RouterView />
  </div>

</template>

<style scoped>
</style>
