const path = require('path');
const { default: merge } = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const common = {
    context: __dirname,
    entry: './src/index.tsx',
    target: 'web',
    node: {
        __dirname: true
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: { loader: 'ts-loader', options: { transpileOnly: true } }
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new Dotenv(),
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        symlinks: false,
        alias: {
            '@api': path.resolve(__dirname, 'src/api/')
        }
    }
};

const productionConfig = {
    mode: 'production'
};

const developmentConfig = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
        hot: true
    }
};

module.exports = (env, args) => {
    switch (args.mode) {
        case 'production':
            return merge(common, productionConfig);
        case 'development':
            return merge(common, developmentConfig);
        default:
            throw new Error(`Trying to use an unknown mode, ${args.mode}`);
    }
};
