const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// mode: 'development',
	entry: './src/index',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: "/",
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
		},
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react', [
								'@babel/preset-typescript', {
									runtime: "automatic"
								}
							]],
						},
					},
					// {
					// 	loader: "awesome-typescript-loader"
					// }
				],
				include: path.resolve(__dirname, 'src'),
			},
			{
				test: /\.(css|less)$/,
				use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
			},
			// {
			// 	test: /\.less$/,
			// 	use: ["style-loader", "css-loader", "less-loader"]
			// }
		]
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				title: "智能温控"
			}
		),
	],
	devtool: 'source-map',
	devServer: {
		compress: false,
		port: 8888,
		historyApiFallback: true,
	}
};