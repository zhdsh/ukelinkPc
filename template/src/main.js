
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import i18n from './lang'
import 'normalize.css/normalize.css'
import AppConfig from './data/getConfig'
import config from './config'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})

import * as filters from './filters' //引入过滤器
Object.keys(filters).forEach(key => {//注册过滤器
  Vue.filter(key,filters[key])
})

/*AppConfig.getConfig().then(d=>{
  Object.assign(config.d);
  new Vue({
  el: '#app',
   router,
   i18n,
   store,
   render: h => h(App),
   components: { App },
   template: '<App/>'
  })
})*/

