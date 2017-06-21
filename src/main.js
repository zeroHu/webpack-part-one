import Vue from 'vue';
import App from './App.vue';
import Router from './router/index.js';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

new Vue({
    el: '#app',
    router: Router,
    render: h => h(App)
});
