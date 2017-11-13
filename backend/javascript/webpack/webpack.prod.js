const { resolve } = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    OfflinePlugin = require('offline-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: resolve(__dirname, '../src'),
    entry: {
      app: `./index.js`,
      vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:6].js',
        publicPath: '/',
    },
    module: {
        rules: [{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
          test: /\.css$/,
          use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase'])
        }]
    },
    devtool: 'source-map',
    performance: {
      hints: 'error'
    },
    resolve: {
      alias: {
        react: 'preact-compat',
        'react-dom': 'preact-compat'
      }
    },
    plugins: [
        new CleanWebpackPlugin(['dist'],{
            root: resolve(__dirname, '..')
        }),
        new ExtractTextPlugin({
            filename: 'styles.[chunkhash:6].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `./index.html`
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new CopyWebpackPlugin([{
            from: resolve(__dirname, '../src/utils/icons/'),
            to: resolve(__dirname, '../dist/')
        }]),
        new OfflinePlugin()
    ]
}
