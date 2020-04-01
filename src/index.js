import './tailwindcss.css'

import OurLoading from '../components/loading/index.vue'
import OurGoTop from '../components/gotop/index.vue'

const components = [
  OurLoading,
  OurGoTop
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  OurLoading,
  OurGoTop
}
