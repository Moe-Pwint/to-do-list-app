const path = require("path");
            const HtmlWebpackPlugin = require("html-webpack-plugin");

            module.exports = {
            mode: "development",
            entry: "./src/index.js",
            output: {
                filename: "main.js",
                path: path.resolve(__dirname, "dist"),
                clean: true,
            },
            devtool: "eval-source-map",
            
            devServer: {
                static: path.resolve(__dirname, "dist"),
                //If I want to use VsCode live view, add devMiddleware
                /*
                devMiddleware: {
                    writeToDisk: true,
                  },
                */
                watchFiles: ["./src/template.html"],
                open: true, // Open the browser automatically
                hot: true, // Enable Hot Module Replacement (HMR)
                port: 8080, // Use this port for your dev server (default: 8080)
            },
            plugins: [
                new HtmlWebpackPlugin({
                template: "./src/template.html",
                }),
            ],
            module: {
                rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                ],
            },
            };