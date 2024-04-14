<script setup>
import VButton from '@/components/v-button.vue'
import { useStore } from 'vuex'
useStore()
</script>

<template>
  <div class="wrapper">
    <div class="links">
      <RouterLink v-slot="{ isActive }" to="/currencies">
        <v-button :active="isActive"> Валюты</v-button>
      </RouterLink>

      <RouterLink v-slot="{ isActive }" to="/converter">
        <v-button :active="isActive"> Конвертер</v-button>
      </RouterLink>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
.links {
  display: flex;
  flex-direction: row;
  gap: 12px;
}
</style>