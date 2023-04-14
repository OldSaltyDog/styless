const listPlugin = require("less-plugin-lists")
const funcPlugin = require("less-plugin-functions")

const lessOpts = {
	plugins: [
		listPlugin,
		funcPlugin
	],
	math: "strict",
	sourceMap: {
		outputFilename: "/demos/assets/css/maps/swx.map",
		sourceMapRootpath: "/src/lesslib/",
		outputSourceFiles: true,
		sourceMapURL: "../my-map.json"	
	}
}