var webpack = require("webpack");

var config = {
    cache: false,
    entry: "./app.jsx",
    output: {
        filename: "bundle.js"
    },
    devtool: "source-map",
module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: "jsx-loader"
        }]
    }
};

module.exports = config;