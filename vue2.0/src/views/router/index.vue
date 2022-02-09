<template>
    <div class="router"> 
        <hz-card>
            <div>注册插件不要忘记 Vue.use(VueRouter)</div>
        </hz-card>
        <hz-card>
            <div>编程式导航</div>
            <div slot="content">
                router.replace({name: 'haizhou', params: {id: 1}})<br> router.push({path: '/foo'})<br> router.go(1) <br>
                <em>* 提供了 path，params 会被忽略</em>
            </div>
        </hz-card>
        <hz-card>
            <div>路由传参数</div>
            <div slot="content">
                不通过$routes取,通过props传。通过配置文件配置。
                当前路由参数id： {{id}}
            </div>
        </hz-card>
        <hz-card>
            <div>路由守卫</div>
            <div slot="content">
                全局路由守卫  beforeEach，beforeResolve，afterEach <br>
                路由独享守卫  beforeEnter <br>
                组建内部守卫<br> beforeRouteEnter<em> * 不能获取this, 解决方法 next的会调用返回this</em><br>beforeRouteUpdate (2.2 新增)<br>beforeRouteLeave<em> * 返回前提示是否保存</em>
            </div>
        </hz-card>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String
        }
    }
};
</script>
<style lang="less">
.router {
    background: #fff;
}
</style>