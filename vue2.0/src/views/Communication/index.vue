<template>
    <div> 
        组件通信
        <Child1 id="name" @click="handleClick"></Child1>
        <Child2></Child2>
    </div>
</template>

<script>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
export default {
    props: {},
    data() {
        return {};
    },
    components: {
        Child1,
        Child2
    },
    computed: {
    },
    created() {
    },
    mounted() {
        console.log(this)
    },
    methods: {
        handleClick() {

        }
    }
};
</script>
<style lang="less">
.main {
}
</style>