var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./index.jsx' // Your appʼs entry point
	],
	devtool: 'eval',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	},
	postcss: function() {
	 return [autoprefixer,precss];
 },
	devServer: {
		contentBase: "./public",
			noInfo: true, //  --no-info option
			hot: true,
			inline: true,
			historyApiFallback: true
		},
	plugins: [
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
		new webpack.NoErrorsPlugin()
	]
};
