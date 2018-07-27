/**
 * Created by panca on 16/11/25.
 */
let webpack = require('webpack');


module.exports = {



    devServer: {//设置开发者工具的端口号
        // inline: true,
        // port: 8181,//默认端口号是8080,如果需要自定义就是设置port
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',//'babel-loader' is also a legal name to reference
                query: {
                    //presets: ['es2015', 'react']
                }
            },
            {   test: /\.(png|PNG|jpg|JPG|jpeg|JPEG|gif|GIF)$/,
                loader: 'url-loader?limit=1&name=img/[hash].[ext]'
            },
            {
                test:/\.css$/,
                // loader:ExtractTextPlugin.extract("style-loader","css-loader")//'style-loader!css-loader'
              loader:'style-loader!css-loader'
            },
            {
                test:/\.(scss|sass)$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins:[
        // new webpack.BannerPlugin('Created by panca on 16/11/25. QQ:643691522'),
        // new webpack.optimize.UglifyJsPlugin({
        //     output: {
        //         // remove all comments(注释)
        //         comments: false
        //     },
        //     compress: {
        //         //不显示警告
        //         warnings: false
        //     },
        //     mangle: {
        //         //mangle 通过设置except数组来防止指定变量被改变
        //         except: ['$super', '$', 'exports', 'require']
        //     }
        // }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        //     },
        // }),
        // new ExtractTextPlugin("entry.bundle.css")
    ]
}

//loader:'style-loader!css-loader!sass-loader'
