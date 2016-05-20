var path = require('path');
var webpack = require('webpack');
module.exports = {
    context: path.resolve('js'),
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('build/'),
        publicPath: '/public/assets/'
    },
    devServer: {
        contentBase: 'public',
        port: 7111
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            _:'lodash'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css!'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader',
                exclude: /node_modules/
            },
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
        ]
    }
}
