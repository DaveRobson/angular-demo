'use strict';

module.exports = function(grunt)
{
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig(
	{
		pkg: grunt.file.readJSON('package.json'),
		develop:
		{
			server:
			{
				file: 'server.js'
			}
		}
	});

	grunt.registerTask('default', ['develop']);
}