import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import router from './routes'

import SearchHeader from './components/searchHeader/searchHeader.vue'

import AppList from './components/appList/appList.vue'
import Header from './components/header/header.vue'
import store from './vuex/store'
// 全局组件的注册
Vue.component('AppList',AppList)
Vue.component('Header',Header)

Vue.config.productionTip = false
// 注册全局组件
Vue.component('SearchHeader',SearchHeader)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
