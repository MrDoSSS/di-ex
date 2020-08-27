import Vue from 'vue'

class DiContainer {
  constructor() {
    this.components = []
  }

  push (payload) {
    this.components.push(payload)
  }

  get (name) {
    return this.components.find(c => c.name === name).component
  }
}

const diContainer = Vue.observable(new DiContainer())

export { diContainer }