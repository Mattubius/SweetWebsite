"use strict";
const path = require('path')
var webpack = require('webpack');
var PROD = process.env.NODE_ENV === "production";

module.exports = {
    entry: "./Scripts/main.jsx",
    output: {
        path: path.resolve("wwwroot/js"),
        filename: PROD ? "bundle.min.js" : "bundle.js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
};