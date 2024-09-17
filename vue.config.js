const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  configureWebpack: async () => {
    // Carrega módulos ESM dinamicamente
    const imageminMozjpeg = (await import('imagemin-mozjpeg')).default;
    const imageminWebp = (await import('imagemin-webp')).default;

    return {
      plugins: [
        new ImageminPlugin({
          pngquant: {
            quality: '65-80', // Compressão de PNG
          },
          plugins: [
            imageminMozjpeg({
              quality: 75, // Compressão de JPEG
            }),
            imageminWebp({
              quality: 75, // Conversão para WebP
            }),
          ],
        }),
      ],
    };
  },
};
