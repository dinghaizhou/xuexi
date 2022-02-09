const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
let devConfig = {
    mode: 'development',
    devServer: {
        port: 9000
    }
}

module.exports = merge(commonConfig, devConfig);