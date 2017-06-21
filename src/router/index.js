import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/index.vue'
import Detail from '../pages/detail.vue'

Vue.use(VueRouter)

const Router = new VueRouter({
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/detail',
        component: Detail
    }]
});
export default Router
