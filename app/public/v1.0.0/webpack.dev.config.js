var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        index: [
            path.resolve(__dirname, "src", "entry", "index.js"),
            'webpack-dev-server/client?http://localhost:8000',
            'webpack/hot/only-dev-server',
        ]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: path.join(__dirname, "public", "javascripts")
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: "style!css!sass"
            },
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'jsx?harmony'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
