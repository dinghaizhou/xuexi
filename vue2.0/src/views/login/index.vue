<template>
    <div class="box"> 
       Login
    </div>
</template>

<script>
import _ from 'lodash'
import {add} from '../../utils/tools'

export default {
    props: {},
    data() {
        return {};
    },
    components: {
        
    },
    computed: {},
    created() {
        add(1, 2);
        console.log(_);
    },
    mounted() {},
    methods: {}
};
</script>
<style lang="less">
    .box {
        width: 100px;
        height: 100px;
        background: pink;
    }
</style>