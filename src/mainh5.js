import Vue from 'vue'
import App from './Apph5'
import Vuex from 'vuex'
import router from './router'
import 'lib-flexible'

Vue.config.productionTip = false
Vue.use(Vuex)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
