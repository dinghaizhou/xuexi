const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// path.resolve() 当前工作目录
// __dirname 当前文件所在目录
console.log(__dirname);
module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src',
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[hash:8].bundle.js',
        publicPath: process.env.NODE_ENV === 'development' ? '' : './'   // 最终发布引用地址
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    // loader 执行顺序从右往左
                    MiniCssExtractPlugin.loader,   // 抽离css为单独文件
                    // 'style-loader',    // 注入style， 与MiniCssExtractPlugin不同时使用。
                    'css-loader'
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    'less-loader'
                ],
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),     // 新增
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: './public/index.html',
            inject: true,
            minify: false   // 是否压缩
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',   // 必须为相对路径
            chunkFilename: '[id].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve('src/static'),
                    to: path.resolve('dist/static'),
                    noErrorOnMissing: true
                }
            ]
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],  // 尝试按顺序解析这些后缀名
        //alias:别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js',  // $符号精确匹配
            '@src': path.resolve('src')
        }
    }
}