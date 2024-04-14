import { createRouter, createWebHistory } from 'vue-router'
import VCurrencies from "@/views/v-currencies.vue";
import VConverter from "@/views/v-converter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/currencies',
      name: 'currencies',
      component: VCurrencies
    },
    { path: '/', redirect: '/currencies' },
    {
      path: '/converter',
      name: 'converter',
      component: VConverter
    }
  ]
})

export default router
