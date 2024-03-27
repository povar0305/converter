<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
import VInput from '@/components/v-input.vue'
import VSelect from '@/components/v-select.vue'

const store = useStore()

store.dispatch('fetchCurrencyList')
const selectedCurrency = ref(Object.keys(store.state.currencyList)[0])
const searchQ = ref('')
</script>

<template>
  <div class="header">
    <v-input v-model.trim="searchQ" placeholder="Search" />
    <div class="header-select">
      <span>Currency</span>
      <v-select v-model="selectedCurrency" :list="store.state.currencyList" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin-top: 32px;

  input {
    max-width: 180px;
  }

  .header-select {
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
      font-size: 12px;
      font-weight: 500;
      line-height: 14.52px;
      text-align: left;
      color: var(--color-input-text);
    }
  }
}
</style>