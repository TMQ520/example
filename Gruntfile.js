module.exports = function(grunt){
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		connect:{
			options:{
				hostname:"*",//localhost
				port:9000,
				livereload:34600
			},
			server:{
				options:{
					open:true,
					base:[
						'app'
					]
				}
			}
		},
		watch:{
			liverload:{
				options:{
					livereload:"<%= connect.options.livereload %>"
				},
				files:[
					'app/*.html',
					'app/style/**/*.css',
					'app/js/**/*.js'
				]
			}
		}
	});
	require('load-grunt-tasks')(grunt); //加载所有的任务
	
	grunt.registerTask('serve', ['connect','watch']);
};