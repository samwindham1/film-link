import Vue from 'vue';
import app from './app';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<app/>',
  components: {
    app
  }
});
