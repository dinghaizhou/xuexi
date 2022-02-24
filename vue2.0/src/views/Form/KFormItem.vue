<template>
    <div class="k-form-item">
        <div v-if="label">{{ label }}</div>
        <slot></slot>
        <p v-if="msg">{{ msg }}</p>
        <p>{{form.rules}}</p>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    inject: ['form'],
    components: {},
    props: {
        label: {
            type: String,
            default: "",
        },
    },

    data() {
        return {
            msg: "",
        };
    },

    computed: {
        ...mapState(["list"]),
    },

    created() {},

    mounted() {},

    methods: {},
};
</script>

<style lang="less">
.main {
}
</style>