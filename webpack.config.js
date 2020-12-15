const path = require("path");
const package = require("./package.json");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: ['babel-polyfill','./src/js/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
            	test: /\.(png|jpg|gif|svg)$/,
            	use: ["file-loader"]
            }
        ]
    },
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			template: path.resolve(__dirname, "./src/index.html"),
			filename: path.resolve(__dirname, "./dist/index.html")
		}),	
		new Dotenv()
	]
}