<script setup>
import { useStore } from 'vuex'
import { computed, onMounted, ref, watch } from 'vue'
import VInput from '@/components/v-input.vue'
import VSelect from '@/components/v-select.vue'
import VCurrencyList from '@/components/v-currency-list.vue'

const store = useStore()
const selectedCurrency = ref()

const searchQ = ref('')

watch(selectedCurrency, function (newV, oldV) {
  if (newV !== oldV) {
    store.dispatch('fetchCurrencyListBySelect', selectedCurrency.value)
  }
})

onMounted(() => {
  store.dispatch('fetchCurrencyList').finally(() => {
    selectedCurrency.value = Object.keys(store.state.currencyList)[0]
  })
})

const currencyListBySelect = computed(() => {
  return store.state.currencyListBySelected[selectedCurrency.value]
})
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <v-input v-model.trim="searchQ" placeholder="Search" />
      <div class="header-select">
        <span>Currency</span>
        <v-select v-model="selectedCurrency" :list="store.state.currencyList" />
      </div>
    </div>
    <v-currency-list :list="currencyListBySelect" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

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