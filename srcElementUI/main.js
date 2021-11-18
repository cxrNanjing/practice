// import Vue from 'vue/dist/vue.esm'
import Vue from 'vue'
import App from '@/App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// import {Button,Message} from 'element-ui'
// Vue.prototype.$message = Message
// Vue.use(Button)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue() 

new Vue({
  // el: '#app',
  render: h => h(App)
}).$mount('#app')