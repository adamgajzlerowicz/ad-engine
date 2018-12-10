const path = require('path');
const pkg = require('./package.json');

module.exports = {
	mode: 'development',
	entry: './src/ad-services/index.ts',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		// alias: {
		// 	'@wikia/ad-engine': path.join(__dirname, 'dist/ad-engine.js'),
		// }
	},
	// externals: Object.keys(pkg.dependencies).map(key => new RegExp(`^${key}`)).concat([
	// 	/^@wikia\/ad-engine/
	// ]),
	optimization: {
		minimize: false
	},
	output: {
		filename: 'ad-services.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'adService',
		libraryTarget: 'commonjs2',
	},
};
