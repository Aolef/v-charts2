import * as Vue from 'vue'
import './style/v-charts.css'

const useVueVersion = () => {
  // Make copy to prevent import warning in Vue 2
  const vueObject = { ...Vue }
  let version

  if (vueObject.default) version = 2
  if (vueObject.version && vueObject.version[0] === '3') {
    version = 3
  }

  return version
}

let VePie

if (useVueVersion() === 2) {
  VePie = require('./vue2/v-charts.pie.mjs')
} else {
  VePie = await import('./vue3/v-charts.pie.mjs')
}

VePie = VePie.default || VePie

export default VePie
