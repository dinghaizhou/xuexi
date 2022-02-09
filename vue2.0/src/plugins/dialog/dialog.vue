<template>
    <div
        v-show="visible" class="dialog-wraper"
>
        <div class="dialog-container">
            <div>
                <button @click="handleClose">关闭</button>
            </div>
            <h1>{{title}}</h1>
            内容
        </div>
        <div class="mask">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            visible: true
        };
    },
    components: {},
    computed: {
       
    },
    created() {
       
    },
    mounted() {

    },
    methods: {
        handleClose() {
            this.visible = false;
            this.close();
        }
    }
};
</script>
<style lang="less" scoped>
.dialog-wraper {
    .mask {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        background: #000;
        z-index: 2000;
    }
    .dialog-container {
        min-width: 200px;
        min-height: 200px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #FFF;
        border-radius: 12px;
        z-index: 2001;
    }
}
</style>