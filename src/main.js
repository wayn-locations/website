import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import DatetimePicker from "vuetify-datetime-picker";
import i18n from "./i18n";

Vue.use(VueViewer);
Vue.use(DatetimePicker);

Vue.config.productionTip = false;

import APIConfig from "./api/config";
import userConfig from "./config/index";
APIConfig.setDefaults();
userConfig.loadConfig();

export const mainEventBus = new Vue({ store });

import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

Vue.component("avatar-cropper", Cropper);

const vm = new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
});

vm.$mount("#app");
