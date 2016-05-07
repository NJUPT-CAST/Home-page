var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:8000',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, "./src/entry/index.js")
        ]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'jsx?harmony'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
}
