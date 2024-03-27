<script lang="ts" setup>
import { useStore } from 'vuex'
import VInput from '@/components/v-input.vue'
import { onMounted, ref, watch } from 'vue'
import VSelect from '@/components/v-select.vue'
import axios from 'axios'

const store = useStore()

const fromCount = ref()
const toCount = ref()
const fromCurrently = ref('')
const toCurrently = ref('')

onMounted(() => {
  store.dispatch('fetchCurrencyList').then(() => {
    fromCurrently.value = Object.keys(store.state.currencyList)[0]
    toCurrently.value = Object.keys(store.state.currencyList)[1]
  })
})

function updateToCount() {
  const url =
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/' +
    fromCurrently.value +
    '.min.json'
  if (fromCount.value) {
    axios
      .get(url)
      .then((response) => {
        toCount.value =
          Number(fromCount.value) * response.data[fromCurrently.value][toCurrently.value].toFixed(3)
      })
      .catch((e) => {
        console.log(e)
      })
  } else {
    toCount.value = ''
  }
}

function updateFromCount() {
  const url =
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/' +
    toCurrently.value +
    '.min.json'

  if (toCount.value) {
    axios
      .get(url)
      .then((response) => {
        fromCount.value =
          Number(toCount.value) * response.data[toCurrently.value][fromCurrently.value].toFixed(3)
      })
      .catch((e) => {
        console.log(e)
      })
  } else {
    fromCount.value = ''
  }
}

watch([fromCurrently, toCurrently], (newV, oldV) => {
  if (newV[0] != oldV[0]) {
    updateToCount()
  }

  if (newV[1] != oldV[1]) {
    updateFromCount()
  }
})
</script>

<template>
  <div class="main">
    <div class="main-inner">
      <v-input
        v-model.trim="fromCount"
        label="From"
        placeholder="Value"
        type="number"
        @update:modelValue="updateToCount"
      />
      <v-select v-model="fromCurrently" :list="store.state.currencyList" />
    </div>
    <div class="main-inner">
      <v-input
        v-model.trim="toCount"
        label="To"
        placeholder="Value"
        type="number"
        @update:modelValue="updateFromCount"
      />
      <v-select v-model="toCurrently" :list="store.state.currencyList" />
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