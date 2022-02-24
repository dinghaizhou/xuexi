<template>
    <div class="k-input">
        <input type="text" :value="value" @input="handleInput" />
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    props: {
        value: {
            type: String,
            default: ""
        }
    },
    mounted() {},
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value)
        }
    },
};
</script>

<style lang="less">
.main {
}
</style>