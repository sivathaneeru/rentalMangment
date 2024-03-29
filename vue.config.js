const path = require('path');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', path.resolve(__dirname, 'src/components'))
      .set('views', path.resolve(__dirname, 'src/views'));
      
    // Add the Vuetify loader and plugin
     config.plugin('VuetifyLoaderPlugin').use(VuetifyLoaderPlugin);
    // config.plugin('VuetifyWebpackPlugin').use(VuetifyWebpackPlugin);
  }
}
