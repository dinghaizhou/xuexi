<template>
    <div class="main"> 
        <my-functional-comp :name="'函数组件'">
            <div>
                <p>test</p>
            </div>
        </my-functional-comp>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    props: {},
    data() {
        return {};
    },
    components: {
        
    },
    computed: {
        ...mapState([
            'list'
        ])
    },
    created() {
    },
    mounted() {
    },
    methods: {
       
    }
};
</script>
<style lang="less">
.main {
    
}
</style>