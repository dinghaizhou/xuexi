<template>
    <div class="card">
        <h3 class="title">
            <slot></slot>
        </h3>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {};
    },
    components: {},
    computed: {},
    created() {},
    mounted() {},
    methods: {}
};
</script>
<style lang="less" scoped>
    .card {
        width: 100%;
        border: 1px solid #ddd;
        padding: 10px;
        margin: 5px 0;
        .title {
            color:cornflowerblue;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .content {
            font-size: 14px;
            font-weight: bold;
        }
    }
</style>