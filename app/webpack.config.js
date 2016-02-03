var webpack = require("webpack");

var config = {
    cache: false,
    entry: "./components/application.jsx",
    output: {
        filename: "bundle.js"
    },
    devtool: "source-map",
module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query:
            {
                presets:['es2015', 'react']
            }
        }]
    }
};

module.exports = config;