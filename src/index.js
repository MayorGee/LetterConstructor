import Vue from 'vue';
import App from './pages/App.vue';
import store from './store';

new Vue({
    el:'#app',
    name: 'App',
    store,
    render: h => h(App)
})