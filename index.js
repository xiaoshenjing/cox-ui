import Alert from "./components/alert"

const components = [Alert]

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default install
