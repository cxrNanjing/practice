// import Vue from 'vue/dist/vue.esm'
import Vue from 'vue'
import App from '@/App'
Vue.config.productionTip = false


// new Vue({
//   el: '#app',
//   template: '<App />',
//   components:{
//     App
//   }
// })

new Vue({
  // el: '#app',
  render: h => h(App)
}).$mount('#app')