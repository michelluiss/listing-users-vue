import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios'
import store from '@/store'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

axios.defaults.baseURL = 'http://localhost:3000';

Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
