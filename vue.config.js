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
    landingPage:{
      entry: "src/pages/landingPage/landingPage.js",
      template: "public/landingPage.html",
      filename: "landingPage.html",
    },
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
    registration:{
      entry: "src/pages/signin/login.js",
      template: "public/registration.html",
      filename: "registration.html",
    },
    error:{
      entry: "src/pages/error/error.js",
      template: "public/error.html",
      filename: "error.html",
    }
  },
  devServer: {
    port: 8084,
    historyApiFallback: {
      rewrites: [
        
        { from: /^\/rental/, to: '/rental.html' },
        { from: /^\/login/, to: '/login.html' },
        { from: /^\/registration/, to: '/registration.html' },
        //  { from: /^\/$/, to: '/login.html' },
         { from: /^/, to: '/landingPage.html' },
        { from: /.*/, to: '/error.html' }
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
