var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Creating 3 bundles...
// app.js bundle contains main source code of the application
// vendor.js bundle contains all vendor source code
// style.css bundle contains all app's stylesheets

module.exports = {
    entry: {
        app: './app/app.jsx',
        vendor: ['react', 'react-dom', 'react-router', 'react-redux', 'redux-thunk', 'axios', 'bootstrap/dist/js/bootstrap.min']
    },
    output: {
        path: __dirname,
        filename: 'public/js/[name].js'
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'public/js/vendor.js'),
        new ExtractTextPlugin('public/css/style.css')
    ],
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            'app/components'
        ],
        alias: {
            routes: 'routes/routes.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    // Transpiling source code from es6 and jsx to es5
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            },
            {
                test: /\.(ttf|eot|svg|woff2?)(\?[a-z0-9]+)?$/,
                loader: 'url?limit=10000&emitFile=false'   
            }
        ]
    }
};