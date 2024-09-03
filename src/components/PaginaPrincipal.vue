<template>
  <body>    
    <h1>Animais extraordinários</h1>
    <p class="grupo1">
      <img :src="lowQuality1" @load="loadHighQuality1" :class="{ loaded: loaded1 }" alt="Dragão roxo com detalhes em azul nas escamas em uma pose majestosa observando o por do sul." aria-describedby="desc1" />
      <span id="desc1" class="descricao">Dragão roxo com detalhes em azul nas escamas em uma pose majestosa observando o por do sul.</span>
    </p>
    <p class="grupo2">
      <img :src="lowQuality2" @load="loadHighQuality2" :class="{ loaded: loaded2 }" alt="Dragão negro esguio nas chuva junto com uma mulher negra." aria-describedby="desc2" />
      <span id="desc2" class="descricao">Dragão negro esguio nas chuva junto com uma mulher negra.</span>
    </p>
    <p class="grupo3">
      <img :src="lowQuality3" @load="loadHighQuality3" :class="{ loaded: loaded3 }" alt="Enorme dragão alaranjado acima de uma cidade com um olhar marcante." aria-describedby="desc3" />
      <span id="desc3" class="descricao">Enorme dragão alaranjado acima de uma cidade com um olhar marcante.</span>
    </p>
  </body>
</template>

<script>
export default {
  data() {
    return {
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
body {
  font-family: Arial, sans-serif;
}

.grupo1, .grupo2, .grupo3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

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

.descricao {
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  color: #555;
}
</style>
