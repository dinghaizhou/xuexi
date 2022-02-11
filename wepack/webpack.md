### Babel 是什么？

编译器

### 编译什么？

ES6 => 向后兼容的 JavaScript 语法 ，适应老板浏览器。

* 语法转换
* 通过 Polyfill 方式在目标环境中添加缺失的特性 （通过引入第三方 polyfill 模块，例如 [core-js](https://github.com/zloirock/core-js)）
* 源码转换（codemods）

### 安装

```bash
npm install webpack webpack-cli --save-dev
```

### 使用

```
npx webpack
```

默认入口 ./src/index.js 默认输出 ./dist/main.js

### babel 相关

```
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime
```

* babel 默认转换语法 let, class, =>

* babel 转换api需要配置 includes,Promise,map

  ```
  //  
  {
      "presets": [
          [
              "@babel/preset-env",
              {
                  "useBuiltIns": "usage",  // 按需加载 entry 需手动引入， false 全部引入
                  "corejs": 3  // 指定core 版本，
                  target: {}   // 制定适配环境
              }
          ]
      ],
      "plugins": [
          [
              "@babel/plugin-transform-runtime" // 抽离公共helper
          ]
      ]
  }
  ```

### 

### Vue webpack 配置

* 配置入口文件，及输出位置

* 配置vue-loader及VueLoaderPlugin插件
* 配置html-webpack-plugin
* 

