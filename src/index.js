import Component from "./Component.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("v-weather-chipiona", Component);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

Component.install = install;

export default Component;