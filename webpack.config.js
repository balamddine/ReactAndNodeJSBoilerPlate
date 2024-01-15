/* eslint-disable no-undef */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = async (env, options) => {
  const config = {
    devtool: "source-map",
    entry: {
      index: ["./src/index.js"],
    },
    output: {
      clean: true,
      publicPath: '',
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
      rules: [
        { 
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        },
        {
          test: /\.jsx?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          exclude: /node_modules/,
        },      
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          use:["file-loader"]
        },
       
      ],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./src/css/styles.css",
            to: "styles.css",
          },
          {
            from: "./public/assets",
            to: "assets",
          },
        ]
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "public", "index.html"),
        chunks: ["index"],
      }),
    ] 
  };

  return config;
};