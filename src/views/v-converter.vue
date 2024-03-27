<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
import VInput from '@/components/v-input.vue'

const store = useStore()
store.dispatch('fetchCurrencyList')
const selectedCurrency = ref(store.state.currencyList[0])

function setCurrency(value) {
  selectedCurrency.value = value
}

const searchQ = ref('')
</script>

<template>
  <div class="header">
    <v-input v-model.trim="searchQ" placeholder="Search" />
    <div class="header-select">
      <select @change="setCurrency($event.target.value)">
        <option v-for="(currency, i) in store.state.currencyList" :key="i" :value="i">
          {{ i }}
        </option>
      </select>
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
    max-width: 250px;
  }
}
</style>