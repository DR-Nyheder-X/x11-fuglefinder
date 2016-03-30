var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var publicPath = 'http://localhost:4001/'

var env = process.env.MIX_ENV || 'dev'
var prod = env === 'prod'
var dev = env === 'dev'
var nodeEnv = process.env.NODE_ENV = ({
  dev: 'development',
  prod: 'production'
})[env] || env

var plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {NODE_ENV: JSON.stringify(nodeEnv)},
    __PROD: prod,
    __DEV: dev
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new CopyWebpackPlugin([
    { from: 'web/static/assets', to: '.' }
  ])
]

if (dev) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
} else if (prod) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compressor: { warnings: false }
  }))
}

var hot = 'webpack-hot-middleware/client?path=' +
  publicPath + '__webpack_hmr'
var entry = {
  index: './web/static/js/index.js'
}

module.exports = {
  devtool: prod ? null : 'eval-source-map',
  entry: Object.keys(entry).reduce(function (entries, key) {
    entries[key] = prod
      ? entry[key]
      : [entry[key], hot]
    return entries
  }, {}),
  output: {
    path: path.resolve(__dirname, 'priv/static'),
    filename: '[name].bundle.js',
    publicPath: publicPath
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'style!css!postcss'
      }
    ]
  },
  postcss: function () {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-nested')(),
      require('postcss-sassy-mixins')(),
      require('postcss-simple-vars')(),
      require('postcss-cssnext')(),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }
}
