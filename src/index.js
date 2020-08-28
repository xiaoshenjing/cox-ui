import "../common/styles/page.scss";
import Button from "../components/Button";

const components = [Button];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default install;
