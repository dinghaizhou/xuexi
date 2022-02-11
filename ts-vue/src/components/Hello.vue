<template>
    <div>
      <input type="text">
      <ul>
        <li v-for="feature in features" :key="feature">{{feature}}</li>
      </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Hello extends Vue {
  // 属性
  features:string[];

  // 函数直接作为回调函数
  addFeature(e: KeyboardEvent) {
    const inp =  e.target as HTMLInputElement;
  }
  // 如果和生命周期同名，就是声明周期
  created() {
    this.features = ['类型注解', '编译型语言']
  }

}
</script>
<style lang="stylus" scoped></style>