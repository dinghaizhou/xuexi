<template>
    <div class="border">
        <h3 v-on="$listeners">Child1</h3>
        <button @click="handleClick">通知child2变化</button>
        <sub-child></sub-child>
    </div>
</template>

<script>
import SubChild from './SubChild.vue'
export default {
  components: {SubChild},
  props: {},

  data() {
      return {};
  },

  computed: {
      
  },
  created() {
    console.log(this.$attrs);
  },
  mounted() {
      console.log(this.$attrs);
      console.log(this.$listeners);
  },

  methods: {
      handleClick() {
          this.$parent.$emit('child1', 'msg')
      }
  }
};
</script>

<style lang="less">
    .border {
        padding: 10px;
        border: 2px solid pink;
    }
</style>