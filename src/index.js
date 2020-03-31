import ourLoading from '../components/loading'

const components = [
  ourLoading
]

export const install = function(Vue, ) {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export const OurLoading = ourLoading