import Vue from 'vue'
import App from './App.vue'
import diMixin from './di-mixin'
import { diContainer } from './di-container'

Vue.config.productionTip = false

Vue.mixin(diMixin)

new Vue({
  provide () {
    return {
      diContainer
    }
  },
  render: h => h(App),
}).$mount('#app')
