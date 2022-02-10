#### computed 和 watch
computed 本身可以当作一个属性来使用，根据不同的依赖计算出一个新的属性。
computed 实现是通过lazyer watcher 实现，如果依赖不发生变化，不会重新计算值。用的是之前的求值。

watch 是用来观察某个属性的变化。从而进行相应的操作。

#### vue响应式原理
所谓的响应式，及数据变化，视图发生相应的改变。
1. 劫持数据，Object.defineProperty(obj, key, description)
2. 依赖收集
    * 收集的是什么？ 
    收集的是Watcher实例。watcher中的有update方法，render watcher 中有updateComponent方法出发视图更新。user Watcher中有 getter 方法，也就是回调函数。每一个组件有一个render Watcher，可以多个user Watcher。
    * 收集在哪里？
    每个Key对应着一个dep对象，该对象存在于defineReactive函数闭包中。dep.add(Dep.target);
    * 怎么收集？
    在get中进行收集，用户访问属性的时候触发get方法。进行收集。
    * 什么时候收集？
    具体实在创建watcher的时候，会主动读取一下属性值，触发相应的收集工作。
    render watcher 的收集是在编译阶段。
    user watcher 的收集实在initComputed， $watch的时候收集。 需要读取属性值触发收集。

3. 变更响应
    用户改变属性值的时候。触发set，从发出发dep.notify(); 
    遍历watcher，watcher.update()， 触发更新。


### vue3 响应式原理
