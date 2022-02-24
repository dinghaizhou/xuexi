import Vue from 'vue';
import App from './index.vue';
import router from './router'
import store from './store';
import dialog from './plugins/dialog'
import card from './components/card'

Vue.use(dialog);
Vue.component('hz-card', card)
Vue.component('my-functional-comp', {
    functional: true,
    render: function (createElement, context) {
        return createElement('div', {
            class: 'xixi',
            style: {color: 'red'}
        }, [
            'lalal',
            createElement('p', 'hahah')
        ]);
        
    }
})

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
});
