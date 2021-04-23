import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueMobileDetection from 'vue-mobile-detection'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)

Vue.use(VueMobileDetection,VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
