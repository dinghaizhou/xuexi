### React和ReactDOM的作用
React提供了虚拟DOM相关的方法
ReactDom提供渲染相关的方法


### react 是什么
React 是一个 JavaScript 库

### JSX
* javascript的语法拓展
* 既不是字符串也不是 HTML
* {} 内可以放置任何有效的js表达式
* 在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。
* JSX
* Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。

### React.createElement()
创建虚拟DOM及react元素
```
    React.createElement({
        h1,
        {className: 'red'},
        'Hello world'
    })
```


###  React 元素（virtual dom）
* 与浏览器的DOM元素不同，React元素（虚拟dom）是创建开销极小的普通对象。
* React DOM会负责更新DOM来与React元素（虚拟dom）保持一致。

### ReactDOM.render()
```
ReactDOM.render(element, container[, callback])
```
#### 官网定义：
* 在提供的 container 里渲染一个 React 元素，并返回对该组件的引用（或者针对无状态组件返回 null）。
* 如果 React 元素之前已经在 container 里渲染过，这将会对其执行更新操作，并仅会在必要时改变 DOM 以映射最新的 React 元素。
* 如果提供了可选的回调函数，该回调将在组件被渲染或更新之后被执行。
* **真实挂载过程**


### 函数组件和class组件
* 组件名必须大写


### State
* 不要直接修改state，使用setState()方法更新state
* State 的更新可能是异步的
* setState(obj｜function(state, props))
* State 的更新会被合并,这里的合并是浅合并.更新某个属性不会覆盖其他属性

### 事件处理 
* 必须显示bind this
    * constructor 中 bind
    * 传入时bind
    * public class fields 语法
    * 回调函数方式 <div onClick={() => {this.handleClick()}}><div>

### hooks
#### useState()
* 声明state变量
#### useEffect() - 函数组件中执行副作用操作
* useEffect 会在每次渲染后都执行
* 相当于三个生命周期 componentDidMount componentDidUpdate componentWillUnmount
#### useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。