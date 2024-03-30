const path = require('path');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin'); // Import VuetifyLoaderPlugin

module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    devtool: 'source-map',
  },
  pages: {
    rental: {
      entry: "src/pages/rental/rental.js",
      template: "public/rental.html",
      filename: "rental.html",
    },
    login: {
      entry: "src/pages/login/login.js",
      template: "public/login.html",
      filename: "login.html",
    },
  },
  devServer: {
    port: 9000,
    historyApiFallback: {
      rewrites: [
        { from: /^\/rental$/, to: '/rental.html' },
        { from: /^\/login$/, to: '/login.html' }
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', path.resolve(__dirname, 'src/components'))
      .set('views', path.resolve(__dirname, 'src/views'));
      
    const IS_VENDOR = /[\\/]node_modules[\\/]/;
    config.optimization.splitChunks({
      cacheGroups: {
        rental: {
          name: `chunk-rental-vendors`,
          priority: -11,
          chunks: chunk => chunk.name === 'index',
          test: IS_VENDOR,
          enforce: true,
        },
        login: {
          name: `chunk-login-vendors`,
          priority: -11,
          chunks: chunk => chunk.name === 'form',
          test: IS_VENDOR,
          enforce: true,
        },
      },
    });
  },
  publicPath: process.env.BASE_URL,
};
