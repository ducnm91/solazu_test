import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, ModalPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ModalPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
