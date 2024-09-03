// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
// import PaginaPrincipal from './components/PaginaPrincipal.vue';
// import ImagensDiversas from './components/ImagensDiversas.vue';
// import VideoUnico from './components/VideoUnico.vue';


const PaginaPrincipal = () => import(/* webpackChunkName: "pagina-principal" */  './components/PaginaPrincipal.vue');

// Definição das rotas
const routes = [
  {
    path: '/',
    name: 'PaginaPrincipal',
    component: PaginaPrincipal
  }

];

// Criação do roteador
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;