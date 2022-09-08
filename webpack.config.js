const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: [
					// Crea nodos `style` a partir de cadenas JS
					"style-loader",
					// Traduce el CSS a CommonJS
					"css-loader",
					// Compila Sass a CSS
					"sass-loader",
				],
			},
			{	//carga las imagenes
				test: /\.(png|jpg|svg|jpeg|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/pictures/[hash][ext]',
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
	devServer: {
		static: {
			// lo puedes llamar public o dist
		  directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
	},
}