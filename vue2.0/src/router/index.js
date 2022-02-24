import VueRouter from "vue-router"
import Vue from "vue";


import Router from '@src/views/router';
const Home = () => import(/* webpackChunkName: "home" */ '@src/views/home')
const Communication = () => import(/* webpackChunkName: "Communication" */ '@src/views/Communication')
const From = () => import(/* webpackChunkName: "From" */ '@src/views/Form')
const FunctionalComp = () => import(/* webpackChunkName: "Communication" */ '@src/views/FunctionalComp')
// 安装路由插件
Vue.use(VueRouter);

// 路由表
let routes = [
    {
        path: '/router/:id?',
        title: '路由',
        component: Router,
        props: true
    },
    {
        path: '/home',
        title: '主页',
        component: Home
    },
    {
        path: '/comunicaiton',
        title: '组件通信',
        component: Communication
    },
    {
<<<<<<< HEAD
        path: '/form',
        title: '组件通信',
        component: From
=======
        path: '/functional',
        title: '组件通信',
        component: FunctionalComp
>>>>>>> 7ca9108042455daa02eafb48e3461bb859a571ff
    },
    {
        path: '/', 
        redirect: '/home'
    }
]

export default new VueRouter({
    routes
})