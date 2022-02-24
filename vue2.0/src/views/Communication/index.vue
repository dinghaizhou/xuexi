<template>
    <div>
        组件通信
        <Child1 id="name" msg="hello" @click="handleClick"></Child1>

        <Child2></Child2>
    </div>
</template>

<script>
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
export default {
    provide: {
        foo: 'foo'
    },
    components: {
        Child1,
        Child2,
    },
    props: {},

    data() {
        return {};
    },

    computed: {},

    created() {},

    mounted() {
        console.log(this);
    },

    methods: {
        handleClick() {
            console.log(111);
        },
    },
};
</script>

<style lang="less">
.main {
}
</style>