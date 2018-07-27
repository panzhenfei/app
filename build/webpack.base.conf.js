'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
//对文件处理的
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin");


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}


module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    //path: config.build.assetsRoot,
    //多文件入口，多文件出口，[name].js,默认one.js输出后还是one.js,two.js输出后还是two.js
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // plugins:[
  //   //开启压缩功能
  //   new UglifyJSPlugin(),
  //   new htmlWebpackPlugin(
  //     {
  //       minify:{
  //         //将HTML进行压缩
  //         removeAttributeQuotes:true
  //       },
  //       hash:true,
  //       template:'../index.html',
  //       title:'hello webpack 这里可以替换index.html中的title中的文字',
  //       //替换所有相关的URl。
  //       //   projectPath:'static'
  //     }),
  //   // new ExtractTextPlugin("one.css"),
  // ],

  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
