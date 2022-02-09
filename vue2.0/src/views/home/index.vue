<template>
    <div class="main"> 
        主页
    </div>
</template>

<script>
import {mapState} from 'vuex';
import _ from 'lodash'
import {add} from '../../utils/tools'
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
        add(1,2);
        console.log(_);
    },
    mounted() {
        console.log(this.list);
    },
    methods: {
        showTips() {
            this.$showDialog({
                confrim: () => {

                },
                cancel: () => {
                    console.log('cancel')
                },
                title: '标题'
            })
        }
    }
};
</script>
<style lang="less">
.main {
    
}
</style>