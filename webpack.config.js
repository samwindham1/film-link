const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    target: 'web',
    node: {
        __dirname: true
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.js'
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: ['ts-loader']
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: ['html-loader']
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            // Fix duplicate react installs
            react: path.resolve('./node_modules/react')
        }
    }
};
