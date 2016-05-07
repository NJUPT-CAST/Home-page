var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        index: [path.resolve(__dirname, "src", "entry", "index.js"), 'webpack-hot-middleware/client']
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: path.join(__dirname, "public", "javascripts")
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
