'use strict';

module.exports = function(grunt)
{
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig(
	{
		pkg: grunt.file.readJSON('package.json'),

		express:
		{
			dev:
			{
				options:
				{
					script: 'server.js'
				}
			}
		},
		watch:
		{
			express:
			{
				files: ['./client/public/js/*.js'],
				tasks: ['express:dev'],
				options:
				{
					spawn: false
				}
			}
		}

	});

	grunt.registerTask('default', ['express', 'watch']);
}