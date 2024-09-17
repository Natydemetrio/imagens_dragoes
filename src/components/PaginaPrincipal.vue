<template>
  <body>    
    <h1>Animais extraordinários</h1>
    <p class="grupo1">
      <picture>
        <source :srcset="lowQuality1Webp" type="image/webp" />
        <img :src="lowQuality1" @load="loadHighQuality1" :class="{ loaded: loaded1 }" alt="Dragão roxo com detalhes em azul nas escamas em uma pose majestosa observando o por do sol." aria-describedby="desc1" />
      </picture>
      <span id="desc1" class="descricao">Dragão roxo com detalhes em azul nas escamas em uma pose majestosa observando o por do sol.</span>
    </p>
    <p class="grupo2">
      <picture>
        <source :srcset="lowQuality2Webp" type="image/webp" />
        <img :src="lowQuality2" @load="loadHighQuality2" :class="{ loaded: loaded2 }" alt="Dragão negro esguio na chuva junto com uma mulher negra." aria-describedby="desc2" />
      </picture>
      <span id="desc2" class="descricao">Dragão negro esguio na chuva junto com uma mulher negra.</span>
    </p>
    <p class="grupo3">
      <picture>
        <source :srcset="lowQuality3Webp" type="image/webp" />
        <img :src="lowQuality3" @load="loadHighQuality3" :class="{ loaded: loaded3 }" alt="Enorme dragão alaranjado acima de uma cidade com um olhar marcante." aria-describedby="desc3" />
      </picture>
      <span id="desc3" class="descricao">Enorme dragão alaranjado acima de uma cidade com um olhar marcante.</span>
    </p>
  </body>
</template>

<script>
export default {
  data() {
    return {
      // Imagens de baixa qualidade
      lowQuality1Webp: require('../assets/dragao_1_low.webp'),
      lowQuality2Webp: require('../assets/dragao_2_low.webp'),
      lowQuality3Webp: require('../assets/dragao_3_low.webp'),
      
      // Imagens de alta qualidade
      highQuality1: require('../assets/dragao_1.jpg'),
      highQuality1Webp: require('../assets/dragao_1.webp'),
      highQuality2: require('../assets/dragao_2.jpg'),
      highQuality2Webp: require('../assets/dragao_2.webp'),
      highQuality3: require('../assets/dragao_3.jpg'),
      highQuality3Webp: require('../assets/dragao_3.webp'),
      
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
