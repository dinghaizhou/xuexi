<template>
    <div class="app"> 
       <ul class="left">
            <router-link tag="li" to="/home">主页</router-link>
            <router-link tag="li" to="/router">路由</router-link>
            <router-link tag="li" to="/comunicaiton">组件通信</router-link>
            <router-link tag="li" to="/functional">函数式组件</router-link>
        </ul>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    props: {},
    data() {
        return {};
    },
    components: {
    },
    computed: {
        ...mapState(['routes'])
    },
    created() {},
    mounted() {},
    methods: {}
};
</script>
<style lang="less">
@import "@src/assets/css/reset.less";

em {
    color:cornflowerblue;
    font-style: normal;
    font-size: 12px;
}
</style>
<style lang="less" scoped>
.app {
    background: #fff;
    display: flex;
    .left {
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        width: 150px;
        color: #fff;
        text-align: center;
        line-height: 40px;
        li {
            border-bottom: 1px solid #fff;
            cursor: pointer;
        }
    }
    .right {
        flex: 1;
        padding: 20px;
        color: #3d3d3d;
    }
}
</style>