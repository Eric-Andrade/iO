const { resolve } = require('path'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    srcDir = resolve(__dirname, 'src'),
    DashboardPlugin = require('webpack-dashboard/plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: `${srcDir}/index.js`,
    output: {
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'standard-loader',
            exclude: /node_modules/
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{loader: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'}]
            })
        }]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: `${srcDir}/index.html`
        }), 
        new ExtractTextPlugin('[name].[contenthash:8].css'),
        new DashboardPlugin(),
    ]
}

// "extract-text-webpack-plugin": "2.0.0-beta.5",
// "normalize.css": "^5.0.0",