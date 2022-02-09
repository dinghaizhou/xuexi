const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let prodConfig = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin() // 生产打包清除dist
    ],
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                vue: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/](vue|vuex)[\\/]/,
                    name: 'vue',
                    priority: 100
                },
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
                utils: {
                    chunks: 'initial',
                    test: /[\\/]utils[\\/]/,
                    name: 'utils',
                    priority: 50
                }
            },
        }
    }
}

module.exports = merge(commonConfig, prodConfig);