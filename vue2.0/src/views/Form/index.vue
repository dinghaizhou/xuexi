<template>
    <div class="main">
        <k-form :model="userinfo" :rules="rules">
            <k-form-item label="用户名">
                <k-input></k-input>
            </k-form-item>
        </k-form>
        {{userinfo}}
    </div>
</template>

<script>
import KFormItem from "./KFormItem.vue";
import KForm from "./KForm.vue";
import KInput from "./KInput";
export default {
    components: {
        KInput,
        KFormItem,
        KForm
    },
    data: () => ({
        userinfo: {
            name: 'haizhou'
        },
        rules: {
            name: {required: true, type: String}
        }
    })
};
</script>

<style lang="less">
.main {
}
</style>