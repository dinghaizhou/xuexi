<template>
    <div class="border">
        SubChild
    </div>
</template>

<script>
export default {
  inject: {
      bar: 'foo'
  },
  components: {},
  props: {},

  data() {
      return {};
  },

  computed: {},
  created() {
      console.log(this.bar)
  },

  mounted() {
     
  },

  methods: {}
};
</script>

<style lang="less">
    .border {
        padding: 10px;
        border: 2px solid pink;
    }
</style>