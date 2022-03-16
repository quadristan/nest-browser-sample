const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const RemoveSourceMapUrlWebpackPlugin = require('@rbarilani/remove-source-map-url-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'ts',
              target: 'es2017'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      stream: require.resolve('stream-browserify'),
      '@nestjs/platform-express': false,
      '@nestjs/microservices': false,
      '@nestjs/websockets': false,
      os: require.resolve('os-browserify'),
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/'),
      tty: path.resolve(__dirname, './tty.js')
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
    chunkFilename: '[id].[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: path.resolve(__dirname, './template.html'),
      filename: 'index.html',
      appEntryPoint: 'bundle.js'
    }),
    new webpack.ProvidePlugin({
      process: path.resolve(__dirname, './process.js')
    }),
    new webpack.ProvidePlugin({
      tty: path.resolve(__dirname, './tty.js')
    }),
    new RemoveSourceMapUrlWebpackPlugin({
      test: /.js$/
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        nestjs: {
          test: /[\\/]node_modules[\\/]@nestjs[\\/]/,
          name: 'vendor-nestjs',
          chunks: 'initial'
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor-others',
          chunks: 'initial'
        }
      }
    }
  }
}
