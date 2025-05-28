const { merge } = require('webpack-merge');
            const common = require('./webpack.common.js');

            module.exports = merge(common, {
            mode: 'development',
            devtool: 'inline-source-map',
            devServer: {
                static: './dist',
                watchFiles: ["./src/template.html"],
                open: true, // Open the browser automatically
                hot: true, // Enable Hot Module Replacement (HMR)
                port: 8080, // Use this port for your dev server (default: 8080)
            },
            });