import Vue from 'vue';
import App from './index.vue';
import router from './router'
import store from './store';
import dialog from './plugins/dialog'
import card from './components/card'

Vue.use(dialog);
Vue.component('hz-card', card)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
});
