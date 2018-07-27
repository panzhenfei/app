// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/Store'
import axios from 'axios'

// import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css'

import VueLazyload from 'vue-lazyload'
//import VueResource from 'vue-resource'

//import 'vue-blu/dist/css/vue-blu.min.css'
// import Adaptive from './playform/Adaptive.js'
// Vue.use(Adaptive)
//Vue.use(VueResource)
Vue.use(VueLazyload)
Vue.prototype.$http = axios;
// Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
