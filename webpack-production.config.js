var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    "./app/app.jsx",
  ],
  output: {
    path: path.join(process.env.PWD, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: "jsx-loader"}, {test: /\.less$/, loader: "style!css!less"},
            {test: /\.json$/, loader: "json"}]
    }
  //module: {
  //  loaders: [
  //    { test: /\.jsx$/,
  //      loader: 'babel',
  //      include: path.join(__dirname, 'src') },
  //    { test: /\.js$/,
  //      loader: 'babel',
  //      exclude: /node_modules/ },
  //    { test: /\.scss?$/,
  //      loader: 'style!css!sass',
  //      include: path.join(__dirname, 'css') },
  //  ]
  //}
}