import Vue from 'vue'
import axios from 'axios'

import db from './node/db'
import say from './node/say'

import App from './App'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.db = Vue.prototype.$db = db
Vue.say = Vue.prototype.$say = say

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
