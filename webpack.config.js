var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        }, {
            test: /\.vue$/,
            use: [{
                loader: "vue-loader"
            }]
        }, {
            test: /.(png|woff|woff2|eot|ttf|svg|gif)$/,
            use: [{
                    loader: "url-loader"
                },
                // {
                //     loader: "css-loader"
                // }
            ]
        }]
    },
    // module: {
    //     rules: [{
    //             test: /\.vue$/, //凡是以.vue结尾的文件使用vue-loader去打包
    //             loader: 'vue-loader', //兼容1.x和2.x
    //             options: {
    //                 loaders: {}
    //                 // other vue-loader options go here
    //             }
    //         },
    //         {
    //             test: /\.css$/, //凡是以.vue结尾的文件使用vue-loader去打包
    //             use: [ //2.x的写法
    //                 {
    //                     loader: "style-loader"
    //                 },
    //                 {
    //                     loader: "css-loader"
    //                 }
    //             ]
    //         }
    //     ]
    // },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //以参数文件生成的最终的文件名称
            template: './template.html'
        })
    ]
}