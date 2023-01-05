import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

Vue.use(VueToast);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
