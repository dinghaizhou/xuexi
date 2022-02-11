/**
 * @file .eslintrc.js
 * @author 
 * @description 根目录下eslint配置文件
 */
 module.exports = {
    root: true,
    parserOptions: {
        "ecmaVersion": 6, // 6 = 2015
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    env:{ 
        // 支持es语法
        es6: true ,
        browser: true
    },
    parser: "babel-eslint",
    rules: {
        "no-console": "warn",
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
};
