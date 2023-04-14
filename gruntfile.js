module.exports = function (grunt) {
	//	require('jit-grunt')(grunt);
	grunt.initConfig({
		less: {
			development: {
				options: {
					strictImports: true,
					strictMath: true,
					strictUnits: true,
					dumpLineNumbers: true,
					plugins: [
						new (require("less-plugin-functions")),
						new (require("less-plugin-lists"))
					]
				},
				files: {
					"swx.css": "stylewerx.less"
				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask("default", ["less"]);
}