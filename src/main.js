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
      counter: 0,
      currencyList: []
    }
  },
  getters: {
    getCounter(state) {
      return state.counter
    }
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload
    },
    setCurrencyList(state, productData) {
      state.currencyList = productData
    }
  },
  actions: {
    increment(context, payload) {
      context.commit('increment', payload)
    },
    fetchCurrencyList({ commit }) {
      axios
        .get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
        .then((response) => {
          console.log(response)
          commit('setCurrencyList', response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
})

app.use(router).use(store)

app.mount('#app')
