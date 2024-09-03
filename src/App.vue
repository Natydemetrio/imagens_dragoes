<template>
  <!-- <div id="app">
    <nav>
      <router-link to="/">Página Principal</router-link> |
      <router-link to="/imagens-diversas">Animais Extraordinários</router-link> |
    </nav>
    <router-view></router-view>
  </div> -->

<div id="app">
    <!-- <nav>
      <button @click="loadComponent('PaginaPrincipal')">Página Principal</button> |
      <button @click="loadComponent('ImagensDiversas')">Imagens Diversas</button> |
    </nav> -->
    <PaginaPrincipal />
    <component :is="currentComponent" v-if="currentComponent"></component>
  </div>
  
  

</template>
<script>
import { defineAsyncComponent } from 'vue';
import PaginaPrincipal from './components/PaginaPrincipal.vue';

export default {
  name: 'App',
  components: {
    PaginaPrincipal
  },
  data() {
    return {
      currentComponent: null
    };
  },
  methods: {
    loadComponent(componentName) {
      this.currentComponent = defineAsyncComponent(() => import(`./components/${componentName}.vue`));
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
