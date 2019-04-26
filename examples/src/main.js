import Vue from 'vue';
import { Icon } from 'leaflet';
import App from './App';
import 'leaflet.icon.glyph';
import router from './router';

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
