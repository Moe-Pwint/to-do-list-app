const path = require('path');
            const HtmlWebpackPlugin = require('html-webpack-plugin');

            module.exports = {
            entry: {
                app: './src/index.js',
            },
            plugins: [
                new HtmlWebpackPlugin({
                title: 'Production',
                }),
            ],
            output: {
                filename: '[name].bundle.js',
                path: path.resolve(__dirname, 'dist'),
                clean: true,
            },
            };

//git add dist -f && git commit -m "Deployment commit"
//npm deploy (git subtree push --prefix dist origin gh-pages)
//git checkout main