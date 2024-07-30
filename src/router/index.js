import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../feature/home/HomeFeature.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/estrutura',
    name: 'estrutura',
    component: () => import(/* webpackChunkName: "about" */ '../feature/estrutura/EstruturaFeature.vue')
  },
  {
    path: '/count',
    name: 'count',
    component: () => import(/* webpackChunkName: "about" */ '../feature/counter/CounterFeature.vue')
  },
  {
    path: '/cep',
    name: 'cep',
    component: () => import(/* webpackChunkName: "about" */ '../feature/viacep/CepFeature.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
