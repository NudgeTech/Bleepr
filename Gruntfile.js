module.exports = function(grunt) {
 
 
    grunt.loadNpmTasks('grunt-loopback-sdk-angular');

    grunt.initConfig({
		  loopback_sdk_angular: {
		    services: {
		      options: {
		        input: 'server/server.js',
		        output: 'client/js/services/lb-services.js'
		      }
		    }
 	 	}	
		  
	
		  
	});

    grunt.registerTask('default', [
  		'loopback_sdk_angular']);

}