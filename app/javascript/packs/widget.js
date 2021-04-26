import Vue from 'vue';
import Vuelidate from 'vuelidate';
import store from '../widget/store';
import App from '../widget/App.vue';
import ActionCableConnector from '../widget/helpers/actionCable';
import { i18n } from '../widget/i18n/initializer';

Vue.use(Vuelidate);

// Event Bus
window.bus = new Vue();

Vue.config.productionTip = false;

window.onload = () => {
  window.WOOT_WIDGET = new Vue({
    store,
    i18n: i18n,
    render: h => h(App),
  }).$mount('#app');

  window.actionCable = new ActionCableConnector(
    window.WOOT_WIDGET,
    window.chatwootPubsubToken
  );
};
