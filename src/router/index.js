import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import PoliticaPrivacidad from '../views/PoliticaPrivacidad/PoliticaPrivacidad.vue'
import PoliticaCookies from '../views/PoliticaCookies/PoliticaCookies.vue'
import AvisoLegal from '../views/AvisoLegal/AvisoLegal.vue'
import EstantesCirculares from '../components/Estantes/EstanteCircular/Circular.vue'
import EstantesCubos from '../components/Estantes/EstanteCuadrado/Cubos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  },
  {
    path: '/privacidad',
    name: 'Privacidad',
    component: PoliticaPrivacidad
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: PoliticaCookies
  },
  {
    path: '/Aviso-legal',
    name: 'Aviso',
    component: AvisoLegal
  },
  {
    path: '/Estantes-circulares',
    name: 'Circulares',
    component: EstantesCirculares
  },
  {
    path: '/Estantes-cubos',
    name: 'Cubos',
    component: EstantesCubos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
