<template>
    <div class="border">
        <h3>Child1</h3>
        <button>通知child2变化</button>
        <sub-child></sub-child>
    </div>
</template>

<script>
import SubChild from './SubChild.vue'
export default {
    props: {},
    data() {
        return {};
    },
    components: {SubChild},
    computed: {},
    created() {},
    mounted() {
        console.log(this.$attrs);
        console.log(this.$listeners);
    },
    methods: {}
};
</script>
<style lang="less">
    .border {
        padding: 10px;
        border: 2px solid pink;
    }
</style>