const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    liveReload: false,
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, '/src/index.tsx'),

    devtool: "inline-source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'babel-loader'
              }
            ]
          },
          {
            enforce: 'pre',
            test: /\.js$/,
            use: [
              {
                loader: 'source-map-loader'
              }
            ]
            
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'style-loader!css-loader!sass-loader',
              }
            ]
            
          },
          {
            test: /\.(jpg|gif|png)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                    name: "images/[name]-[hash:8].[ext]"
                  }
              }
            ]
          }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
        filename: 'index.html',
        inject: true,
      }),
      new HotModuleReplacementPlugin()
    ],
}