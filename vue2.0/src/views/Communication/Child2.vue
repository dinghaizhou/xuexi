<template>
    <div class="border">
        Child2
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {};
    },
    computed: {
    },
    created() {
        this.$parent.$on('child1', (val) => {
            console.log(val)
        })
    },
    mounted() {},
    methods: {}
};
</script>

<style lang="stylus" scoped>
</style>