import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router.js'
import Toast from 'vue-toast-notification';

Vue.config.productionTip = false
import 'vue-toast-notification/dist/theme-bootstrap.css';
import '@/index.css';

Vue.use(Toast);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
