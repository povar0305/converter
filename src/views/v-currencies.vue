<script lang="ts" setup>
import { useStore } from 'vuex'
import VInput from '@/components/v-input.vue'
import { onMounted, ref } from 'vue'
import VSelect from '@/components/v-select.vue'

const store = useStore()

const fromCount = ref('')
const toCount = ref('')
const fromCurrently = ref('')
const toCurrently = ref('')
const currentList = ref({})

onMounted(() => {
  store.dispatch('fetchCurrencyList').finally(() => {
    fromCurrently.value = Object.keys(store.state.currencyList)[0]
    currentList.value = store.state.currencyList
    toCurrently.value = Object.keys(store.state.currencyList)[1]
  })
})
</script>

<template>
  <div class="main">
    {{ fromCount }}{{ toCount }}
    <div class="main-inner">
      <v-input v-model.trim="fromCount" label="From" placeholder="Value" type="number" />
      <v-select v-model="fromCurrently" :list="currentList" />
    </div>
    <div class="main-inner">
      <v-input v-model.trim="toCount" label="To" placeholder="Value" />
      <v-select v-model="toCurrently" :list="currentList" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  gap: 32px;
  margin-top: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
    .custom-input {
      max-width: 100%;
      display: flex;
      flex: 302;
    }

    .custom-select {
      display: flex;
      flex: 80;
    }
  }

  &-inner {
    display: flex;
    flex-direction: row;
    align-items: end;
    gap: 8px;
  }
}

::v-deep .custom-input {
  max-width: 120px;
}
</style>