import VueRouter from "vue-router"
import Vue from "vue";


import Router from '@src/views/router';
const Home = () => import(/* webpackChunkName: "home" */ '@src/views/home')
const Communication = () => import(/* webpackChunkName: "Communication" */ '@src/views/Communication')
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
        path: '/functional',
        title: '组件通信',
        component: FunctionalComp
    },
    {
        path: '/', 
        redirect: '/home'
    }
]

export default new VueRouter({
    routes
})