<template>
    <div class="k-from">
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide() {
        return {
            form: this
        }
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        }
    },
    data() {
        return {};
    },
};
</script>

<style lang="less">
.main {
}
</style>