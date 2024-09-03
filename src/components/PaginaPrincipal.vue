<template>
  <body>    
    <h1>Animais extraordinários</h1>
    <p class="grupo1">
      <img :src="lowQuality1" @load="loadHighQuality1" :class="{ loaded: loaded1 }" alt="Dragão 1" />
    </p>
    <p class="grupo2">
      <img :src="lowQuality2" @load="loadHighQuality2" :class="{ loaded: loaded2 }" alt="Dragão 2" />
    </p>
    <p class="grupo3">
      <img :src="lowQuality3" @load="loadHighQuality3" :class="{ loaded: loaded3 }" alt="Dragão 3" />
    </p>
  </body>
</template>

<script>
export default {
  data() {
    return {
      // Certifique-se de que os caminhos para as imagens de baixa e alta qualidade estão corretos
      lowQuality1: require('../assets/dragao_1_low.jpg'),
      highQuality1: require('../assets/dragao_1.jpg'),
      lowQuality2: require('../assets/dragao_2_low.jpg'),
      highQuality2: require('../assets/dragao_2.jpg'),
      lowQuality3: require('../assets/dragao_3_low.jpg'),
      highQuality3: require('../assets/dragao_3.jpg'),
      loaded1: false,
      loaded2: false,
      loaded3: false,
    };
  },
  methods: {
    loadHighQuality1(event) {
      // Atribui a imagem de alta qualidade após o carregamento da de baixa qualidade
      event.target.src = this.highQuality1;
      this.loaded1 = true;
    },
    loadHighQuality2(event) {
      event.target.src = this.highQuality2;
      this.loaded2 = true;
    },
    loadHighQuality3(event) {
      event.target.src = this.highQuality3;
      this.loaded3 = true;
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  max-width: 800px;
  transition: filter 0.5s ease-in-out;
  filter: blur(10px);
}

/* Remove o blur quando a imagem de alta qualidade estiver carregada */
img.loaded {
  filter: blur(0);
}
</style>
