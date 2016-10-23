'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		// pkg: grunt.file.readJSON('package.json'),
		
		'create-windows-installer': {

		  x64: {
		    appDirectory: '/Users/lilysun/eshopVagrant/html/desktop',
		    outputDirectory: '/Users/lilysun/Desktop',
		    authors: 'Olmarket inc.',
		    exe: 'OnlineOrder.exe'
		  },

		  ia32: {
		    appDirectory: '/Users/lilysun/eshopVagrant/html/desktop',
		    outputDirectory: '/Users/lilysun/Desktop',
		    authors: 'Olmarket inc.',
		    exe: 'OnlineOrder.exe'
		  }
		}
	});

	grunt.loadNpmTasks('grunt-electron-installer');

	grunt.registerTask('default',['create-windows-installer']);
}

