
import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: import('./pages/PaginaInicial.vue') },
  { path: '/principal', component: import('./pages/PaginaPrincipal.vue') },
] 

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router