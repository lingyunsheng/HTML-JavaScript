
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path =require('path');
const ExtractTextPlugin= require('extract-text-webpack-plugin');
module.exports={
    entry:'./src/index',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{

        rules:[
            {
                test:/\.css$/,
                // 将css从main.js吸出来 单独打包
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        'css-loader'
                    ]

                })
            },
            {
                // 正则表达式匹配
                test:/\.js$/,
                include:[
                    path.resolve(__dirname,'src')

                ],
                use:'babel-loader'
            }
        ]
    },
    resolve:{
        alias:{
            log$:path.resolve(__dirname,'src/utils/log.js')

        },
        // 自动补全后缀
        extensions:['.js','.css']

    },
    plugins:[
        new HtmlWebPackPlugin({
            filename:'index.html',
            template:'src/index.html'

        }),
        new ExtractTextPlugin('[name].css')
    ]
}