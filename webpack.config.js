var path = require("path");
module.exports = {
  entry: "./app/app.js",
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'app/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        exclude: /node-modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /bode_modules/,
        loader: 'babel_loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.(png|jpg?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?limit=10000&name=img/[name].[hash:8].[ext]'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve(__dirname, './src/assets/icons') // 只带自己人玩
      },
      {
        test: /\.woff?$|\.woff2?$|\.svg?$|\.ttf?$|\.eot?$/,
        loaders: 'url-loader'
      },

    ]
  }
},
  plugin = {
    $: "jquery",
    jquery: 'jquery',
    'window.jquery': 'jquery'
  }