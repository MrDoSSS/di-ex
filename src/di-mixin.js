import { diContainer } from './di-container'


export default {
  created () {
    if (!this.$parent) return
    diContainer.push({ name: this.$options.name, component: this })
  }
}