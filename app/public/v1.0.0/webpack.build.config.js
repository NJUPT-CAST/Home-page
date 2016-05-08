var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry:{
        index: "./src/entry/index.js",
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js",
        // publicPath: __dirname
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
