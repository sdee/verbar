var webpack = require("webpack");

var config = {
    cache: true,
    entry: "./app.jsx",
    output: {
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: "jsx-loader",
        }, {test: /\.less$/, loader: "style!css!less"},
            {test: /\.json$/, loader: "json"}]
    }
};

module.exports = config;