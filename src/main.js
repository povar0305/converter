import './assets/main.css'
import { createStore } from 'vuex'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)
const store = createStore({
  state() {
    return {
      currencyList: {},
      currencyListBySelected: {}
    }
  },
  mutations: {
    setCurrencyList(state, productData) {
      state.currencyList = productData
    },
    setCurrencyListBySelected(state, value) {
      state.currencyListBySelected = value
    }
  },
  actions: {
    async fetchCurrencyList({ commit }) {
      await axios
        .get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
        .then((response) => {
          commit('setCurrencyList', response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async fetchCurrencyListBySelect({ commit }, selectedCurrency) {
      if (selectedCurrency) {
        await axios
          .get(
            'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/' +
              selectedCurrency +
              '.json'
          )
          .then((response) => {
            commit('setCurrencyListBySelected', response.data)
          })
          .catch((e) => {
            console.log(e)
          })
      }
    }
  }
})
app.use(router).use(store)

app.mount('#app')
