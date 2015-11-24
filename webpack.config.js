var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var isProduction = process.env.NODE_ENV === 'production';

function getEntrySources(sources) {
    if (!isProduction) {
        sources.unshift('webpack/hot/only-dev-server');
        sources.unshift('webpack-dev-server/client?http://localhost:8081');
    }
    return sources;
}

function getJSLoaders(loaders) {
    if (!isProduction) {
        loaders.unshift('react-hot');
    }
    return loaders;
}

module.exports = {
    entry: {
        index: getEntrySources([
            './js/index'
        ]),
        vendor: ['react']
    },
    output: {
        path: './dest/',
        filename: '[name].js',
        chunkFilename: "[id].js",
        publicPath: '/dest/',
        jsonpFunction: '__wpjp_'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: getJSLoaders([
                'babel-loader?presets[]=es2015,presets[]=react&+cacheDirectory'
            ])
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!postcss-loader'
        }]
    },
    plugins: [
        new Clean(['dest']),
        new CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.DefinePlugin({
            DEBUG: process.env.NODE_ENV !== 'production'
        })
    ],
    postcss: function() {
        return [require('postcss-nested')];
    }
};